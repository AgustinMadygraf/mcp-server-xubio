import axios, { AxiosInstance } from "axios";
import { XubioAuthService } from "./XubioAuthService.js";

/**
 * Referencias oficiales de la API: 
 * - Docs: https://xubio.com/API/documentation/index.html#
 * - Swagger: https://xubio.com/API/1.1/swagger.json
 */
const XUBIO_API_BASE = "https://xubio.com/API/1.1/";

export abstract class XubioBaseRepository {
  protected axiosInstance: AxiosInstance;

  constructor(protected authService: XubioAuthService) {
    this.axiosInstance = axios.create({
      baseURL: XUBIO_API_BASE,
      headers: { Accept: "application/json" },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        
        // Log detallado del error para diagnóstico (Incidente 20260430)
        if (error.response) {
          console.error(`[Auth] Error API Xubio: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
        } else {
          console.error(`[Auth] Error de Red/Conexión: ${error.message}`);
        }

        if (
          error.response?.data?.error === "invalid_token" &&
          error.response?.data?.error_description === "token died" &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          this.authService.invalidateToken();
          const token = await this.authService.getToken();
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return this.axiosInstance(originalRequest);
        }
        return Promise.reject(error);
      }
    );
  }

  protected async get(endpoint: string) {
    const token = await this.authService.getToken();
    const response = await this.axiosInstance.get(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}
