import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioTasaIvaRepository } from "../src/infrastructure/api/BatchXubioRepositories.js";
import dotenv from "dotenv";

dotenv.config();

async function run() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  const repo = new XubioTasaIvaRepository(auth);
  const data = await repo.findAll();
  console.log("Data sample:", JSON.stringify(data[0], null, 2));
}

run().catch(console.error);
