import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { GetClientesUseCase } from "../../application/use-cases/GetClientesUseCase.js";
import { GetProductosUseCase } from "../../application/use-cases/GetProductosUseCase.js";
import { GetFacturasUseCase } from "../../application/use-cases/GetFacturasUseCase.js";
import { GetProveedoresUseCase } from "../../application/use-cases/GetProveedoresUseCase.js";
import { GetStockUseCase } from "../../application/use-cases/GetStockUseCase.js";

export class McpServer {
  private server: Server;

  constructor(
    private getClientesUseCase: GetClientesUseCase,
    private getProductosUseCase: GetProductosUseCase,
    private getFacturasUseCase: GetFacturasUseCase,
    private getProveedoresUseCase: GetProveedoresUseCase,
    private getStockUseCase: GetStockUseCase
  ) {
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
          description: "Obtener la lista de clientes de Xubio",
          inputSchema: { type: "object", properties: {} },
        },
        {
          name: "get_productos",
          description: "Obtener la lista de productos de Xubio",
          inputSchema: { type: "object", properties: {} },
        },
        {
          name: "get_facturas",
          description: "Obtener la lista de facturas de venta de Xubio",
          inputSchema: { type: "object", properties: {} },
        },
        {
          name: "get_proveedores",
          description: "Obtener la lista de proveedores de Xubio",
          inputSchema: { type: "object", properties: {} },
        },
        {
          name: "get_stock",
          description: "Obtener el listado de stock actual de los productos de Xubio",
          inputSchema: { type: "object", properties: {} },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      switch (request.params.name) {
        case "get_clientes":
          return await this.handleRequest(() => this.getClientesUseCase.execute());
        case "get_productos":
          return await this.handleRequest(() => this.getProductosUseCase.execute());
        case "get_facturas":
          return await this.handleRequest(() => this.getFacturasUseCase.execute());
        case "get_proveedores":
          return await this.handleRequest(() => this.getProveedoresUseCase.execute());
        case "get_stock":
          return await this.handleRequest(() => this.getStockUseCase.execute());
        default:
          throw new McpError(ErrorCode.MethodNotFound, `Herramienta desconocida: ${request.params.name}`);
      }
    });
  }

  private async handleRequest(action: () => Promise<any>) {
    try {
      const data = await action();
      console.error(`[MCP] Petición procesada exitosamente. Registros: ${Array.isArray(data) ? data.length : 1}`);
      return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      };
    } catch (error: any) {
      console.error(`[MCP] Error procesando petición: ${error.message}`);
      return {
        content: [{ type: "text", text: `Error: ${error.message}` }],
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
