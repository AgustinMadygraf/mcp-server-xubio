import fs from "fs";
import path from "path";
import os from "os";
import readline from "readline";
import dotenv from "dotenv";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const SERVER_NAME = "xubio";
const PROJECT_ROOT = process.cwd();
const SERVER_PATH = path.join(PROJECT_ROOT, "dist", "index.js");

const CONFIG_LOCATIONS = [
  {
    name: "Antigravity Settings",
    path: path.join(os.homedir(), ".gemini", "settings.json"),
    type: "mcpServers"
  },
  {
    name: "Antigravity/Gemini CLI",
    path: path.join(os.homedir(), ".gemini", "antigravity", "mcp_config.json"),
    type: "mcpServers"
  },
  {
    name: "Claude Desktop (Linux)",
    path: path.join(os.homedir(), ".config", "Claude", "claude_desktop_config.json"),
    type: "mcpServers"
  }
];

async function setup() {
  console.log("🚀 Asistente de Configuración Xubio MCP\n");

  const clientId = await question("🔑 Introduce tu XUBIO_CLIENT_ID: ");
  const secretId = await question("🔐 Introduce tu XUBIO_SECRET_ID: ");

  if (!clientId || !secretId) {
    console.error("❌ Error: Ambos campos son obligatorios.");
    rl.close();
    return;
  }

  // 1. Guardar en .env
  const envContent = `XUBIO_CLIENT_ID=${clientId}\nXUBIO_SECRET_ID=${secretId}\n`;
  fs.writeFileSync(path.join(PROJECT_ROOT, ".env"), envContent);
  console.log("\n✅ Archivo .env actualizado.");

  // 2. Actualizar Clientes MCP
  for (const loc of CONFIG_LOCATIONS) {
    if (fs.existsSync(loc.path)) {
      try {
        const content = fs.readFileSync(loc.path, "utf-8").trim();
        let config = JSON.parse(content || "{}");
        if (!config.mcpServers) config.mcpServers = {};
        
        config.mcpServers[SERVER_NAME] = {
          command: "node",
          args: [SERVER_PATH],
          env: {
            XUBIO_CLIENT_ID: clientId,
            XUBIO_SECRET_ID: secretId
          }
        };

        fs.writeFileSync(loc.path, JSON.stringify(config, null, 2));
        console.log(`✅ Configuración actualizada en ${loc.name}`);
      } catch (e) {
        console.error(`❌ Error en ${loc.name}`);
      }
    }
  }

  console.log("\n🎉 ¡Xubio configurado para Datamaq!");
  rl.close();
}

setup().catch(console.error);
