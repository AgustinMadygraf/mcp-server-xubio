import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioFacturaRepository } from "../src/infrastructure/api/XubioFacturaRepository.js";
import { XubioPDFRepository } from "../src/infrastructure/api/BatchXubioRepositories.js";
import dotenv from "dotenv";

dotenv.config();

async function validate() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  const facturaRepo = new XubioFacturaRepository(auth);
  const pdfRepo = new XubioPDFRepository(auth);
  
  console.log("🚀 Buscando una factura para validar PDF...");
  try {
    const facturas = await facturaRepo.findAll();
    if (!facturas || facturas.length === 0) {
      console.log("⚠️ No se encontraron facturas.");
      return;
    }
    
    const target = facturas[0];
    console.log("Factura object keys:", Object.keys(target));
    console.log("Sample Factura:", JSON.stringify(target, null, 2));
    
    const id = target.transaccionid || target.ID || target.id;
    console.log(`✅ Factura encontrada: ID=${id}`);
    
    console.log(`🚀 Validando get_pdf_url para ID=${id}...`);
    const pdfData = await pdfRepo.findAll({ idtransaccion: id, tipoimpresion: 1 });
    console.log(`✅ OK: URL recibida.`);
    console.log(JSON.stringify(pdfData, null, 2));
  } catch (error: any) {
    console.error(`❌ FALLÓ: ${error.message}`);
    if (error.response) {
        console.error(JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  }
}

validate().catch(console.error);
