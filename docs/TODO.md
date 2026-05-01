# Roadmap y Tareas Pendientes (TODO)

## Cobertura Actual
- **Total Endpoints GET en Swagger**: 54
- **Implementados**: 39 (72%)
- **Pendientes**: 15 (28%)

---

## ✅ Implementados recientemente

### 📦 Gestión de Stock y Compras
- [x] `get_stock`: Listado general de stock (`/productoStock`).
- [x] `get_depositos`: Listado de depósitos (`/depositos`).
- [x] `get_facturas_compra`: Facturas de proveedores (`/comprobanteCompraBean`).
- [x] `get_ordenes_compra`: Órdenes de compra (`/ordenCompraBean`).
- [x] `get_productos_compra`: Catálogo de productos de compra (`/ProductoCompraBean`).
- [x] `get_relacion_comprobantes`: Relación entre facturas y NC (`/relacionFacturaNotaDeCredito`).
- [x] `get_comprobantes_asociados`: Comprobantes asociados (`/comprobantesAsociados`).

### 💰 Finanzas y Contabilidad
- [x] `get_cobranzas`: Lista de cobranzas (`/cobranzaBean`).
- [x] `get_bancos`: Listado de bancos (`/banco`).
- [x] `get_cuentas_contables`: Plan de cuentas (`/cuenta`).
- [x] `get_presupuestos`: Presupuestos (`/presupuestoBean`).
- [x] `get_remitos`: Remitos de venta (`/remitoVentaBean`).
- [x] `get_vendedores`: Vendedores (`/vendedorBean`).
- [x] `get_puntos_venta`: Puntos de venta (`/puntoVentaBean`).
- [x] `get_asientos_manuales`: Asientos manuales (`/asientoContableManualBean`).
- [x] `get_ajustes_stock`: Ajustes de stock (`/ajusteStockBean`).
- [x] `get_centros_costo`: Centros de costo (`/centroDeCostoBean`).
- [x] `get_listas_precio`: Listas de precios (`/listaPrecioBean`).
- [x] `get_percepciones`: Percepciones (`/percepcionBean`).
- [x] `get_retenciones`: Retenciones (`/retencionBean`).

### ⚙️ Configuración y Maestros
- [x] `get_monedas`: Monedas (`/monedaBean`).
- [x] `get_paises`: Países (`/paisBean`).
- [x] `get_provincias`: Provincias (`/provinciaBean`).
- [x] `get_localidades`: Localidades (`/localidadBean`).
- [x] `get_tasas_iva`: Tasas impositivas (`/tasaImpositiva`).
- [x] `get_categorias_cuenta`: Categorías de cuenta (`/categoriaCuenta`).
- [x] `get_categorias_fiscales`: Categorías fiscales (`/categoriaFiscal`).
- [x] `get_circuitos_contables`: Circuitos contables (`/circuitoContableBean`).
- [x] `get_identificaciones_tributarias`: Identificaciones tributarias (`/identificacionTributaria`).
- [x] `get_mi_empresa`: Mi Empresa (`/miempresa`).
- [x] `get_sucursales`: Sucursales de clientes (`/sucursalClienteBean`).
- [x] `get_transportes`: Transportes (`/transporteBean`).
- [x] `get_talonarios`: Talonarios (`/talonario`).
- [x] `get_unidades_medida`: Unidades de medida (`/unidadMedida`).

---

## ⚠️ Incidentes Conocidos (Requiere Revisión)
- [ ] `get_pagos`: El endpoint `/pagoBean` devuelve Error 500/401 en Xubio con el mensaje "ResultSet is closed". Posible bug en la API de Xubio o volumen de datos excesivo.

---

## 🚀 Próximos Pasos (Backlog Restante)

### 🛠️ Mejoras Técnicas
- [ ] **Paginación**: Implementar el manejo de `lastTransactionID` para recuperar listas largas (Xubio corta en 1000 por defecto).
- [ ] **Filtros**: Permitir filtrar por fecha, cliente o estado.
- [ ] **Testing**: Implementar Unit Tests con Mocks.

### 📚 Endpoints Pendientes (15)
- [ ] Actividades Económicas (`/actividadEconomicaBean`) - *Importado pero no registrado*
- [ ] Talonario de Cobranza (`/talonarioCobranza`)
- [ ] URL de PDF (`/imprimirPDF`)
- [ ] Endpoints por ID (`{id}`):
    - [ ] Cliente por ID
    - [ ] Factura por ID
    - [ ] Proveedor por ID
    - [ ] Presupuesto por ID
    - [ ] Orden de Compra por ID
    - [ ] Factura de Compra por ID
    - [ ] Ajuste de Stock por ID
    - [ ] Asiento Manual por ID
    - [ ] Lista de Precios por ID
    - [ ] Cuenta por ID
    - [ ] Stock por Producto ID
    - [ ] Sucursal por ID
