import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioTalonarioCobranzaRepository } from "../src/infrastructure/api/BatchXubioRepositories.js";
import dotenv from "dotenv";

dotenv.config();

async function validate() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  const repo = new XubioTalonarioCobranzaRepository(auth);
  
  console.log("🚀 Validando get_talonario_cobranza...");
  try {
    const data = await repo.findAll();
    console.log(`✅ OK: Recibidos ${Array.isArray(data) ? data.length : '1'} registros.`);
    console.log(JSON.stringify(Array.isArray(data) ? data.slice(0, 2) : data, null, 2));
  } catch (error: any) {
    console.error(`❌ FALLÓ: ${error.message}`);
    process.exit(1);
  }
}

validate().catch(console.error);
