# Roadmap y Tareas Pendientes (TODO)

## Cobertura Actual
- **Total Endpoints GET en Swagger**: 54
- **Implementados**: 54 (100% Paridad de Funcionalidad GET)
- **Pendientes**: 0

---

## ✅ Implementados recientemente (Fase Final)

### 🆔 Endpoints por ID (Nuevos!)
- [x] `get_cliente_por_id`: Cliente individual.
- [x] `get_factura_por_id`: Factura individual.
- [x] `get_proveedor_por_id`: Proveedor individual.
- [x] `get_presupuesto_por_id`: Presupuesto individual.
- [x] `get_orden_compra_por_id`: Orden de compra individual.
- [x] `get_factura_compra_por_id`: Factura de compra individual.
- [x] `get_ajuste_stock_por_id`: Ajuste de stock individual.
- [x] `get_asiento_manual_por_id`: Asiento manual individual.
- [x] `get_lista_precio_por_id`: Lista de precios individual.
- [x] `get_cuenta_contable_por_id`: Cuenta contable individual.
- [x] `get_stock_por_producto_id`: Stock de un producto específico.

### 📄 Documentos y Otros
- [x] `get_pdf_url`: Obtención de URL de impresión.
- [x] `get_talonario_cobranza`: Talonarios específicos para cobranzas.
- [x] `get_comprobantes_asociados`: Cruce de documentos.

---

## ⚠️ Incidentes Conocidos (Limitaciones de la API de Xubio)
- [ ] `get_pagos`: El endpoint `/pagoBean` devuelve Error 500 en Xubio ("ResultSet is closed"). Se mantiene la implementación pero depende de la estabilidad de Xubio.

---

## 🚀 Futuras Mejoras (V2)

### 🛠️ Mejoras Técnicas
- [ ] **Paginación Robusta**: Implementar el manejo de `lastTransactionID` para recuperar listas largas de forma automática.
- [ ] **Filtros Avanzados**: Implementar esquemas de entrada para filtrar por fechas, estados, etc.
- [ ] **Modos de Escritura (POST/PUT)**: Comenzar la implementación de creación y modificación de entidades.
