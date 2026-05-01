import axios, { AxiosInstance } from "axios";
import { IClienteRepository } from "../../domain/repositories/IClienteRepository.js";
import { Cliente } from "../../domain/entities/Cliente.js";
import { XubioAuthService } from "./XubioAuthService.js";

const XUBIO_API_BASE = "https://xubio.com/API/1.1/";

export class XubioClienteRepository implements IClienteRepository {
  private axiosInstance: AxiosInstance;

  constructor(private authService: XubioAuthService) {
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

  async findAll(): Promise<Cliente[]> {
    const token = await this.authService.getToken();
    const response = await this.axiosInstance.get("clienteBean", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}
