import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { ToolRegistry } from "./ToolRegistry.js";
import { Logger } from "mcp-server-core";

export class McpServer {
  private server: Server;
  private registry: ToolRegistry;
  private logger = Logger.getInstance();

  constructor() {
    this.server = new Server(
      { name: "xubio-mcp-server", version: "1.0.0" },
      { capabilities: { tools: {} } }
    );
    this.registry = ToolRegistry.getInstance();

    this.setupHandlers();
    this.server.onerror = (error) => this.logger.error("[MCP Error]", error);
  }

  private setupHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: this.registry.list(),
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const toolName = request.params.name;
      const args = request.params.arguments;
      const handler = this.registry.get(toolName);

      if (!handler) {
        throw new McpError(ErrorCode.MethodNotFound, `Herramienta desconocida: ${toolName}`);
      }

      return await this.handleRequest(() => handler.useCase.execute(args));
    });
  }

  private async handleRequest(action: () => Promise<any>) {
    try {
      const data = await action();
      this.logger.info(`[MCP] Petición procesada exitosamente.`);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error: any) {
      this.logger.error(`[MCP] Error procesando petición: ${error.message}`);
      return {
        content: [{ type: "text", text: `Error: ${error.message}` }],
        isError: true,
      };
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    this.logger.info("Xubio MCP server corriendo en stdio");
  }
}
