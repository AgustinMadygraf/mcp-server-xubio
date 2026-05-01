import { AxiosInstance } from "axios";

export function attachLogging(axiosInstance: AxiosInstance, prefix: string = "[API]"): void {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response) {
        console.error(`${prefix} Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      } else {
        console.error(`${prefix} Error de Red/Conexión: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );
}
