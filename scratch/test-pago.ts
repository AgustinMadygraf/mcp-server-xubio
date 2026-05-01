import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioPagoRepository } from "../src/infrastructure/api/BatchXubioRepositories.js";
import dotenv from "dotenv";

dotenv.config();

async function test() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  const repo = new XubioPagoRepository(auth);

  try {
    console.log("🧪 Probando endpoint de Pagos...");
    const data = await repo.findAll();
    console.log("✅ Éxito:", data.length, "registros.");
  } catch (error: any) {
    console.error("❌ Falló el test de pagos.");
    if (error.response) {
      console.error("STATUS:", error.response.status);
      console.error("DATA:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error("MESSAGE:", error.message);
    }
  }
}

test();
