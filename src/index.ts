#!/usr/bin/env node
import dotenv from "dotenv";
import { XubioAuthService } from "./infrastructure/api/XubioAuthService.js";
import { XubioClienteRepository } from "./infrastructure/api/XubioClienteRepository.js";
import { XubioProductoRepository } from "./infrastructure/api/XubioProductoRepository.js";
import { XubioFacturaRepository } from "./infrastructure/api/XubioFacturaRepository.js";
import { XubioProveedorRepository } from "./infrastructure/api/XubioProveedorRepository.js";

import { GetClientesUseCase } from "./application/use-cases/GetClientesUseCase.js";
import { GetProductosUseCase } from "./application/use-cases/GetProductosUseCase.js";
import { GetFacturasUseCase } from "./application/use-cases/GetFacturasUseCase.js";
import { GetProveedoresUseCase } from "./application/use-cases/GetProveedoresUseCase.js";

import { validateConfig } from "./infrastructure/config/Config.js";
import { McpServer } from "./infrastructure/mcp/McpServer.js";

async function bootstrap() {
  const config = validateConfig();

  // Infrastructure
  const authService = new XubioAuthService(config.XUBIO_CLIENT_ID, config.XUBIO_SECRET_ID);
  
  const clienteRepo = new XubioClienteRepository(authService);
  const productoRepo = new XubioProductoRepository(authService);
  const facturaRepo = new XubioFacturaRepository(authService);
  const proveedorRepo = new XubioProveedorRepository(authService);

  // Application
  const getClientesUseCase = new GetClientesUseCase(clienteRepo);
  const getProductosUseCase = new GetProductosUseCase(productoRepo);
  const getFacturasUseCase = new GetFacturasUseCase(facturaRepo);
  const getProveedoresUseCase = new GetProveedoresUseCase(proveedorRepo);

  // Presentation (MCP)
  const mcpServer = new McpServer(
    getClientesUseCase,
    getProductosUseCase,
    getFacturasUseCase,
    getProveedoresUseCase
  );

  await mcpServer.run().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

bootstrap();
