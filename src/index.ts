#!/usr/bin/env node
import dotenv from "dotenv";
import { XubioAuthService } from "./infrastructure/api/XubioAuthService.js";
import { XubioClienteRepository } from "./infrastructure/api/XubioClienteRepository.js";
import { GetClientesUseCase } from "./application/use-cases/GetClientesUseCase.js";
import { McpServer } from "./infrastructure/mcp/McpServer.js";

dotenv.config();

/**
 * Bootstrapping the application with Dependency Injection
 */
async function bootstrap() {
  const clientId = process.env.XUBIO_CLIENT_ID;
  const secretId = process.env.XUBIO_SECRET_ID;

  if (!clientId || !secretId) {
    console.error("Error: XUBIO_CLIENT_ID and XUBIO_SECRET_ID are required in environment variables.");
    process.exit(1);
  }

  // Infrastructure
  const authService = new XubioAuthService(clientId, secretId);
  const clienteRepository = new XubioClienteRepository(authService);

  // Application
  const getClientesUseCase = new GetClientesUseCase(clienteRepository);

  // Presentation (MCP)
  const mcpServer = new McpServer(getClientesUseCase);

  // Run
  await mcpServer.run().catch((error) => {
    console.error("Fatal error running MCP server:", error);
    process.exit(1);
  });
}

bootstrap();
