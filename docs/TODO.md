# Roadmap y Tareas Pendientes (TODO)

## Cobertura Actual
- **Total Endpoints GET en Swagger**: 54
- **Implementados**: 20 (37%)
- **Pendientes**: 34 (63%)

---

## ✅ Implementados en esta fase

### 📦 Gestión de Stock y Compras
- [x] `get_stock`: Listado general de stock (`/productoStock`).
- [x] `get_depositos`: Listado de depósitos (`/depositos`).
- [x] `get_facturas_compra`: Facturas de proveedores (`/comprobanteCompraBean`).
- [x] `get_ordenes_compra`: Órdenes de compra (`/ordenCompraBean`).

### 💰 Finanzas y Ventas
- [x] `get_cobranzas`: Lista de cobranzas (`/cobranzaBean`).
- [x] `get_bancos`: Listado de bancos (`/banco`).
- [x] `get_cuentas_contables`: Plan de cuentas (`/cuenta`).
- [x] `get_presupuestos`: Presupuestos (`/presupuestoBean`).
- [x] `get_remitos`: Remitos de venta (`/remitoVentaBean`).
- [x] `get_vendedores`: Vendedores (`/vendedorBean`).
- [x] `get_puntos_venta`: Puntos de venta (`/puntoVentaBean`).

### ⚙️ Configuración y Maestros
- [x] `get_monedas`: Monedas (`/monedaBean`).
- [x] `get_paises`: Países (`/paisBean`).
- [x] `get_provincias`: Provincias (`/provinciaBean`).
- [x] `get_localidades`: Localidades (`/localidadBean`).
- [x] `get_tasas_iva`: Tasas impositivas (`/tasaImpositiva`).

---

## ⚠️ Incidentes Conocidos (Requiere Revisión)
- [ ] `get_pagos`: El endpoint `/pagoBean` devuelve Error 500/401 en Xubio con el mensaje "ResultSet is closed". Posible bug en la API de Xubio o volumen de datos excesivo.

---

## 🚀 Próximos Pasos

### 🛠️ Mejoras Técnicas
- [ ] **Paginación**: Implementar el manejo de `lastTransactionID` para recuperar listas largas (Xubio corta en 1000 por defecto).
- [ ] **Filtros**: Permitir filtrar por fecha, cliente o estado (actualmente solo traen los últimos registros).
- [ ] **Testing**: Implementar Unit Tests con Mocks para desacoplar las pruebas de la API real.
- [ ] **Observabilidad**: Integrar los logs en un sistema más estructurado.

### 📚 Endpoints Pendientes (Backlog)
- [ ] Listas de Precios (`/listaPrecioBean`)
- [ ] Asientos Manuales (`/asientoContableManualBean`)
- [ ] Ajustes de Stock (`/ajusteStockBean`)
- [ ] Centros de Costo (`/centroDeCostoBean`)
- [ ] Retenciones / Percepciones (`/retencionBean`, `/percepcionBean`)
- [ ] Mi Empresa (`/miempresa`)
