# Roadmap y Tareas Pendientes (TODO)

Este documento detalla los endpoints de la API de Xubio que aún no han sido implementados en este servidor MCP.

## Cobertura Actual
- **Total Endpoints GET en Swagger**: 54
- **Implementados**: 4 (7.4%)
- **Pendientes**: 50 (92.6%)

---

## Próximas Implementaciones Prioritarias

### 📦 Gestión de Stock (Alta Prioridad)
- [ ] `get_stock_producto`: Consultar stock de un ID específico (`/productoStock/{id}`).
- [ ] `get_stock_total`: Listado general de stock (`/productoStock`).
- [ ] `get_depositos`: Listado de depósitos configurados (`/depositos`).

### 💰 Finanzas y Tesorería (Prioridad Media)
- [ ] `get_cobranzas`: Lista de cobranzas recibidas (`/cobranzaBean`).
- [ ] `get_pagos`: Lista de pagos realizados (`/pagoBean`).
- [ ] `get_bancos`: Listado de bancos configurados (`/banco`).
- [ ] `get_cuentas_contables`: Plan de cuentas (`/cuenta`).

### 🛒 Compras (Prioridad Media)
- [ ] `get_facturas_compra`: Consultar facturas de proveedores (`/comprobanteCompraBean`).
- [ ] `get_ordenes_compra`: Consultar órdenes de compra enviadas (`/ordenCompraBean`).

---

## Otros Endpoints Pendientes (Backlog)

### Ventas y Comercial
- [ ] Presupuestos (`/presupuestoBean`)
- [ ] Remitos de Venta (`/remitoVentaBean`)
- [ ] Vendedores (`/vendedorBean`)
- [ ] Listas de Precios (`/listaPrecioBean`)
- [ ] Puntos de Venta (`/puntoVentaBean`)

### Entidades y Configuración
- [ ] Mi Empresa (`/miempresa`)
- [ ] Monedas (`/monedaBean`)
- [ ] Provincias / Localidades (`/provinciaBean`, `/localidadBean`)
- [ ] Tasas Impositivas (`/tasaImpositiva`)
- [ ] Identificación Tributaria (`/identificacionTributaria`)

### Contabilidad Avanzada
- [ ] Asientos Manuales (`/asientoContableManualBean`)
- [ ] Ajustes de Stock (`/ajusteStockBean`)
- [ ] Centros de Costo (`/centroDeCostoBean`)
- [ ] Retenciones / Percepciones (`/retencionBean`, `/percepcionBean`)

---

## Mejoras Técnicas
- [ ] Implementar paginación en `get_facturas` y `get_clientes` (usando los headers `limit` y `lastTransactionID` de Xubio).
- [ ] Soporte para filtros por fecha en herramientas de facturación.
- [ ] Cache temporal opcional para endpoints de configuración (ej. monedas, provincias) para reducir latencia.
