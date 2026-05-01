# Xubio MCP Server

Servidor MCP (Model Context Protocol) para la API de Xubio, construido con TypeScript siguiendo principios de **Arquitectura Limpia**, **DDD** y **SOLID**.

Este servidor está diseñado exclusivamente para operaciones de **lectura (GET)**.

## Características

- **Arquitectura Robusta**: Implementación basada en capas (Domain, Application, Infrastructure).
- **Autenticación Automática**: Manejo de OAuth2 con renovación automática de tokens (incluyendo recuperación ante error "token died").
- **Herramientas Disponibles**: Consulta de clientes, productos, facturas y proveedores.
- **Seguridad**: Solo operaciones de lectura permitidas.

## Requisitos Previos

- Node.js (v18 o superior)
- Credenciales de API de Xubio (`Client ID` y `Secret ID`)

## Instalación

1. Clona el repositorio o copia los archivos.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Compila el proyecto:
   ```bash
   npm run build
   ```

## Configuración

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (o usa `.env.example` como base):

```env
XUBIO_CLIENT_ID=tu_client_id
XUBIO_SECRET_ID=tu_secret_id
```

### 2. Configuración Automática (Recomendado)

Si usas clientes como **Antigravity**, **Claude Desktop** o **Claude Code**, puedes configurar el servidor automáticamente ejecutando:

```bash
npm run setup
```

Este script detectará tus clientes MCP instalados y añadirá el servidor con la ruta correcta de tu sistema.

### 3. Configuración Manual MCP

Si prefieres hacerlo manualmente, añade lo siguiente a tu archivo de configuración (ej: `mcp_config.json`):

```json
{
  "mcpServers": {
    "xubio": {
      "command": "node",
      "args": ["/ruta/absoluta/a/mcp-server-xubio/dist/index.js"],
      "env": {
        "XUBIO_CLIENT_ID": "TU_CLIENT_ID",
        "XUBIO_SECRET_ID": "TU_SECRET_ID"
      }
    }
  }
}
```

## Herramientas (Tools)

Este servidor expone las siguientes herramientas MCP organizadas por categorías:

### 📦 Ventas y Compras
- `get_clientes`: Obtiene la lista de clientes.
- `get_productos`: Obtiene el catálogo de productos de venta.
- `get_facturas`: Obtiene las facturas de venta realizadas.
- `get_proveedores`: Obtiene la lista de proveedores.
- `get_facturas_compra`: Obtiene las facturas de compra recibidas.
- `get_ordenes_compra`: Obtiene las órdenes de compra emitidas.
- `get_presupuestos`: Obtiene los presupuestos enviados.
- `get_remitos`: Obtiene los remitos de venta.

### 💰 Finanzas y Stock
- `get_cobranzas`: Obtiene las cobranzas registradas.
- `get_pagos`: Obtiene los pagos realizados (⚠️ Sujeto a errores de API Xubio).
- `get_bancos`: Obtiene el listado de bancos configurados.
- `get_cuentas_contables`: Obtiene el plan de cuentas.
- `get_stock`: Obtiene el stock actual de productos.
- `get_depositos`: Obtiene la lista de depósitos de mercadería.

### ⚙️ Configuración y Maestros
- `get_monedas`: Listado de monedas disponibles.
- `get_paises`: Listado de países.
- `get_provincias`: Listado de provincias.
- `get_localidades`: Listado de localidades.
- `get_tasas_iva`: Listado de alícuotas de IVA.
- `get_vendedores`: Listado de vendedores configurados.
- `get_puntos_venta`: Listado de puntos de venta activos.

## Documentación Adicional

- [Arquitectura](docs/architecture.md)
- [Autenticación](docs/authentication.md)
- [Depuración](docs/debugging.md)
- [Herramientas](docs/tools.md)
- [Requerimientos (SRS)](docs/SRS.md)
- [Hoja de Ruta (TODO)](docs/TODO.md)

## Referencias Oficiales

- [Documentación de la API de Xubio](https://xubio.com/API/documentation/index.html#)
- [Definición Swagger (JSON)](https://xubio.com/API/1.1/swagger.json)
