import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioFacturaRepository } from "../src/infrastructure/api/XubioFacturaRepository.js";
import dotenv from "dotenv";

dotenv.config();

async function run() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  const repo = new XubioFacturaRepository(auth);
  const data = await repo.findAll();
  console.log("Keys of first item:", Object.keys(data[0]));
  console.log("ID of first item:", data[0].transaccionid || data[0].ID || data[0].id);
}

run().catch(console.error);
