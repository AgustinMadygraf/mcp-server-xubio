import { z } from "zod";
import dotenv from "dotenv";

import { IConfigProvider } from "./IConfigProvider.js";

process.env.DOTENV_CONFIG_QUIET = "true";
dotenv.config();

const envSchema = z.object({
  XUBIO_CLIENT_ID: z.string().min(1, "XUBIO_CLIENT_ID es requerido"),
  XUBIO_SECRET_ID: z.string().min(1, "XUBIO_SECRET_ID es requerido"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export class ConfigProvider implements IConfigProvider {
  private config: z.infer<typeof envSchema>;

  constructor() {
    const result = envSchema.safeParse(process.env);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      console.error("❌ Error de configuración (Variables de entorno):");
      Object.entries(errors).forEach(([field, messages]) => {
        console.error(` - ${field}: ${messages?.join(", ")}`);
      });
      process.exit(1);
    }
    this.config = result.data;
  }

  get clientId(): string { return this.config.XUBIO_CLIENT_ID; }
  get secretId(): string { return this.config.XUBIO_SECRET_ID; }
  get nodeEnv(): string { return this.config.NODE_ENV; }
}

export function validateConfig(): ConfigProvider {
  return new ConfigProvider();
}
