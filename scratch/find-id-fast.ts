import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioVendedorRepository } from "../src/infrastructure/api/BatchXubioRepositories.js";
import dotenv from "dotenv";

dotenv.config();

async function run() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  const repo = new XubioVendedorRepository(auth);
  const data = await repo.findAll();
  console.log("Vendedor keys:", Object.keys(data[0]));
  console.log("Vendedor ID field:", data[0].vendedorId);
}

run().catch(console.error);
