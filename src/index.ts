#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const XUBIO_API_BASE = "https://xubio.com/API/1.1/";
const XUBIO_TOKEN_URL = "https://xubio.com/API/1.1/TokenEndpoint";

interface XubioTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
  scope: string;
}

class XubioClient {
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;
  private axiosInstance: AxiosInstance;

  constructor(private clientId: string, private secretId: string) {
    this.axiosInstance = axios.create({
      baseURL: XUBIO_API_BASE,
      headers: {
        Accept: "application/json",
      },
    });

    // Add interceptor for automatic token renewal on "token died" error
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (
          error.response?.data?.error === "invalid_token" &&
          error.response?.data?.error_description === "token died" &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          this.accessToken = null; // Force renewal
          const token = await this.getToken();
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return this.axiosInstance(originalRequest);
        }
        return Promise.reject(error);
      }
    );
  }

  private async getToken(): Promise<string> {
    const now = Date.now();
    if (this.accessToken && now < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const authHeader = Buffer.from(`${this.clientId}:${this.secretId}`).toString("base64");
      const response = await axios.post<XubioTokenResponse>(
        XUBIO_TOKEN_URL,
        "grant_type=client_credentials",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${authHeader}`,
          },
        }
      );

      this.accessToken = response.data.access_token;
      this.tokenExpiry = now + parseInt(response.data.expires_in) * 1000 - 60000; // 1 minute buffer
      return this.accessToken;
    } catch (error) {
      console.error("Error obtaining Xubio token:", error);
      throw new Error("Failed to authenticate with Xubio");
    }
  }

  async getClientes() {
    const token = await this.getToken();
    const response = await this.axiosInstance.get("clienteBean", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}

class XubioServer {
  private server: Server;
  private xubioClient: XubioClient;

  constructor() {
    const clientId = process.env.XUBIO_CLIENT_ID;
    const secretId = process.env.XUBIO_SECRET_ID;

    if (!clientId || !secretId) {
      throw new Error("XUBIO_CLIENT_ID and XUBIO_SECRET_ID environment variables are required");
    }

    this.xubioClient = new XubioClient(clientId, secretId);

    this.server = new Server(
      {
        name: "xubio-mcp-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
    
    this.server.onerror = (error) => console.error("[MCP Error]", error);
    process.on("SIGINT", async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "get_clientes",
          description: "Obtener la lista de clientes de Xubio",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      if (request.params.name !== "get_clientes") {
        throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${request.params.name}`);
      }

      try {
        const clientes = await this.xubioClient.getClientes();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(clientes, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Error fetching clientes: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Xubio MCP server running on stdio");
  }
}

const server = new XubioServer();
server.run().catch(console.error);
