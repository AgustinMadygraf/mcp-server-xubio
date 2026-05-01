import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  XUBIO_CLIENT_ID: z.string().min(1, "XUBIO_CLIENT_ID es requerido"),
  XUBIO_SECRET_ID: z.string().min(1, "XUBIO_SECRET_ID es requerido"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export type Config = z.infer<typeof envSchema>;

export function validateConfig(): Config {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    console.error("❌ Error de configuración (Variables de entorno):");
    Object.entries(errors).forEach(([field, messages]) => {
      console.error(` - ${field}: ${messages?.join(", ")}`);
    });
    process.exit(1);
  }

  return result.data;
}
