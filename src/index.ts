#!/usr/bin/env node
import dotenv from "dotenv";
import { XubioAuthService } from "./infrastructure/api/XubioAuthService.js";
import { XubioClienteRepository } from "./infrastructure/api/XubioClienteRepository.js";
import { XubioProductoRepository } from "./infrastructure/api/XubioProductoRepository.js";
import { XubioFacturaRepository } from "./infrastructure/api/XubioFacturaRepository.js";
import { XubioProveedorRepository } from "./infrastructure/api/XubioProveedorRepository.js";
import { XubioStockRepository } from "./infrastructure/api/XubioStockRepository.js";
import { XubioCobranzaRepository } from "./infrastructure/api/XubioCobranzaRepository.js";

import { GetClientesUseCase } from "./application/use-cases/GetClientesUseCase.js";
import { GetProductosUseCase } from "./application/use-cases/GetProductosUseCase.js";
import { GetFacturasUseCase } from "./application/use-cases/GetFacturasUseCase.js";
import { GetProveedoresUseCase } from "./application/use-cases/GetProveedoresUseCase.js";
import { GetStockUseCase } from "./application/use-cases/GetStockUseCase.js";
import { GetCobranzasUseCase } from "./application/use-cases/GetCobranzasUseCase.js";

import { validateConfig } from "./infrastructure/config/Config.js";
import { McpServer } from "./infrastructure/mcp/McpServer.js";
import { ToolRegistry } from "./infrastructure/mcp/ToolRegistry.js";

async function bootstrap() {
  const config = validateConfig();

  // Infrastructure
  const authService = new XubioAuthService(config.clientId, config.secretId);
  
  const clienteRepo = new XubioClienteRepository(authService);
  const productoRepo = new XubioProductoRepository(authService);
  const facturaRepo = new XubioFacturaRepository(authService);
  const proveedorRepo = new XubioProveedorRepository(authService);
  const stockRepo = new XubioStockRepository(authService);
  const cobranzaRepo = new XubioCobranzaRepository(authService);

  // Application (Use Cases)
  const getClientesUseCase = new GetClientesUseCase(clienteRepo);
  const getProductosUseCase = new GetProductosUseCase(productoRepo);
  const getFacturasUseCase = new GetFacturasUseCase(facturaRepo);
  const getProveedoresUseCase = new GetProveedoresUseCase(proveedorRepo);
  const getStockUseCase = new GetStockUseCase(stockRepo);
  const getCobranzasUseCase = new GetCobranzasUseCase(cobranzaRepo);

  // Register Tools
  const registry = ToolRegistry.getInstance();
  
  registry.register("get_clientes", {
    useCase: getClientesUseCase,
    description: "Obtener la lista de clientes de Xubio",
  });
  
  registry.register("get_productos", {
    useCase: getProductosUseCase,
    description: "Obtener la lista de productos de venta de Xubio",
  });
  
  registry.register("get_facturas", {
    useCase: getFacturasUseCase,
    description: "Obtener la lista de facturas de venta de Xubio",
  });
  
  registry.register("get_proveedores", {
    useCase: getProveedoresUseCase,
    description: "Obtener la lista de proveedores de Xubio",
  });
  
  registry.register("get_stock", {
    useCase: getStockUseCase,
    description: "Obtener el listado de stock actual de los productos de Xubio",
  });

  registry.register("get_cobranzas", {
    useCase: getCobranzasUseCase,
    description: "Obtener el listado de cobranzas de Xubio",
  });

  // Presentation (MCP)
  const mcpServer = new McpServer();

  await mcpServer.run().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

bootstrap();
