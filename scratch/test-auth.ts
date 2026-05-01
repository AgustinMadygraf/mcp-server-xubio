import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import dotenv from "dotenv";

dotenv.config();

async function test() {
  console.log("TEST START");
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  try {
    const token = await auth.getToken();
    console.log("TOKEN OK:", token.substring(0, 10) + "...");
  } catch (e) {
    console.log("TEST FAILED", e);
  }
}

test();
