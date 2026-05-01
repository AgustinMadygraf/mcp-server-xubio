import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { GetClientesUseCase } from "../../application/use-cases/GetClientesUseCase.js";

export class McpServer {
  private server: Server;

  constructor(private getClientesUseCase: GetClientesUseCase) {
    this.server = new Server(
      { name: "xubio-mcp-server", version: "1.0.0" },
      { capabilities: { tools: {} } }
    );

    this.setupHandlers();
    this.server.onerror = (error) => console.error("[MCP Error]", error);
  }

  private setupHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "get_clientes",
          description: "Obtener la lista de clientes de Xubio (Solo Lectura)",
          inputSchema: { type: "object", properties: {} },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      switch (request.params.name) {
        case "get_clientes":
          return await this.handleGetClientes();
        default:
          throw new McpError(ErrorCode.MethodNotFound, `Herramienta desconocida: ${request.params.name}`);
      }
    });
  }

  private async handleGetClientes() {
    try {
      const clientes = await this.getClientesUseCase.execute();
      return {
        content: [{ type: "text", text: JSON.stringify(clientes, null, 2) }],
      };
    } catch (error: any) {
      return {
        content: [{ type: "text", text: `Error al obtener clientes: ${error.message}` }],
        isError: true,
      };
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Xubio MCP server corriendo en stdio");
  }
}
