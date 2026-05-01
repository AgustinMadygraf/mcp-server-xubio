import fs from "fs";
import path from "path";
import os from "os";

const SERVER_NAME = "xubio";
const PROJECT_ROOT = process.cwd();
const SERVER_PATH = path.join(PROJECT_ROOT, "dist", "index.js");

const CONFIG_LOCATIONS = [
  // Antigravity / Gemini CLI
  {
    name: "Antigravity/Gemini CLI",
    path: path.join(os.homedir(), ".gemini", "antigravity", "mcp_config.json"),
    type: "mcpServers"
  },
  // Claude Desktop (Linux)
  {
    name: "Claude Desktop (Linux)",
    path: path.join(os.homedir(), ".config", "Claude", "claude_desktop_config.json"),
    type: "mcpServers"
  },
  // Claude Desktop (macOS)
  {
    name: "Claude Desktop (macOS)",
    path: path.join(os.homedir(), "Library", "Application Support", "Claude", "claude_desktop_config.json"),
    type: "mcpServers"
  },
  // Claude Code
  {
    name: "Claude Code",
    path: path.join(os.homedir(), ".claude", "config.json"),
    type: "mcpServers"
  }
];

async function setup() {
  console.log("🚀 Iniciando configuración automática del servidor Xubio MCP...");

  let configurationsFound = 0;

  for (const loc of CONFIG_LOCATIONS) {
    if (fs.existsSync(loc.path)) {
      console.log(`\n🔍 Detectado: ${loc.name} en ${loc.path}`);
      try {
        const content = fs.readFileSync(loc.path, "utf-8").trim();
        let config: any = {};
        
        if (content) {
          try {
            config = JSON.parse(content);
          } catch (e) {
            console.warn(`⚠️ Archivo ${loc.name} malformado, se inicializará uno nuevo.`);
          }
        }
        
        if (!config.mcpServers) config.mcpServers = {};
        
        config.mcpServers[SERVER_NAME] = {
          command: "node",
          args: [SERVER_PATH],
          env: {
            XUBIO_CLIENT_ID: process.env.XUBIO_CLIENT_ID || "TU_CLIENT_ID",
            XUBIO_SECRET_ID: process.env.XUBIO_SECRET_ID || "TU_SECRET_ID"
          }
        };

        fs.writeFileSync(loc.path, JSON.stringify(config, null, 2));
        console.log(`✅ Configuración actualizada exitosamente para ${loc.name}`);
        configurationsFound++;
      } catch (error: any) {
        console.error(`❌ Error al actualizar ${loc.name}: ${error.message}`);
      }
    }
  }

  if (configurationsFound === 0) {
    console.log("\n⚠️ No se detectaron archivos de configuración de clientes MCP conocidos.");
    console.log("Puedes configurar manualmente el servidor usando esta ruta:");
    console.log(SERVER_PATH);
  } else {
    console.log(`\n🎉 Configuración completada en ${configurationsFound} clientes.`);
  }
}

setup().catch(console.error);
