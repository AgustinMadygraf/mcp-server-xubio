import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioProductoRepository } from "../src/infrastructure/api/XubioProductoRepository.js";
import dotenv from "dotenv";

dotenv.config();

async function test() {
  const clientId = process.env.XUBIO_CLIENT_ID!;
  const secretId = process.env.XUBIO_SECRET_ID!;

  console.log("🧪 Iniciando prueba de diagnóstico para 'get_productos'...");
  
  const authService = new XubioAuthService(clientId, secretId);
  const repo = new XubioProductoRepository(authService);

  try {
    const productos = await repo.findAll();
    console.log(`✅ Éxito! Se recuperaron ${productos.length} productos.`);
  } catch (error: any) {
    console.error("\n❌ La petición falló.");
    console.error("Detalle del error:", error.message || error);
  }
}

test();
