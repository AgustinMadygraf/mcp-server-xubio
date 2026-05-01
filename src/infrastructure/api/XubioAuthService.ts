import axios from "axios";

const XUBIO_TOKEN_URL = "https://xubio.com/API/1.1/TokenEndpoint";

interface XubioTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
}

export class XubioAuthService {
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  constructor(private clientId: string, private secretId: string) {}

  async getToken(): Promise<string> {
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
      this.tokenExpiry = now + parseInt(response.data.expires_in) * 1000 - 60000;
      return this.accessToken;
    } catch (error) {
      console.error("Error al obtener token de Xubio:", error);
      throw new Error("Fallo en la autenticación con Xubio");
    }
  }

  invalidateToken() {
    this.accessToken = null;
  }
}
