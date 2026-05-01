import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioClienteRepository } from "../src/infrastructure/api/XubioClienteRepository.js";
import { XubioProductoRepository } from "../src/infrastructure/api/XubioProductoRepository.js";
import { XubioFacturaRepository } from "../src/infrastructure/api/XubioFacturaRepository.js";
import { XubioProveedorRepository } from "../src/infrastructure/api/XubioProveedorRepository.js";
import { XubioStockRepository } from "../src/infrastructure/api/XubioStockRepository.js";
import { XubioCobranzaRepository } from "../src/infrastructure/api/XubioCobranzaRepository.js";
import dotenv from "dotenv";

dotenv.config();

async function runTests() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  
  const repos = [
    { name: "Clientes", repo: new XubioClienteRepository(auth) },
    { name: "Productos", repo: new XubioProductoRepository(auth) },
    { name: "Facturas", repo: new XubioFacturaRepository(auth) },
    { name: "Proveedores", repo: new XubioProveedorRepository(auth) },
    { name: "Stock", repo: new XubioStockRepository(auth) },
    { name: "Cobranzas", repo: new XubioCobranzaRepository(auth) },
  ];

  console.log("🚀 Iniciando suite de pruebas de regresión...\n");

  for (const item of repos) {
    try {
      const data = await (item.repo as any).findAll();
      console.log(`✅ ${item.name.padEnd(12)}: OK (${data.length} registros)`);
    } catch (error: any) {
      console.error(`❌ ${item.name.padEnd(12)}: FALLÓ - ${error.message}`);
    }
  }
}

runTests();
