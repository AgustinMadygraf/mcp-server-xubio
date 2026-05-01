import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioActividadEconomicaRepository } from "../src/infrastructure/api/BatchXubioRepositories.js";
import dotenv from "dotenv";

dotenv.config();

async function validate() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  const repo = new XubioActividadEconomicaRepository(auth);
  
  console.log("🚀 Validando get_actividades_economicas...");
  try {
    const data = await repo.findAll();
    console.log(`✅ OK: Recibidos ${Array.isArray(data) ? data.length : '1'} registros.`);
    console.log(JSON.stringify(data.slice(0, 2), null, 2));
  } catch (error: any) {
    console.error(`❌ FALLÓ: ${error.message}`);
    process.exit(1);
  }
}

validate().catch(console.error);
