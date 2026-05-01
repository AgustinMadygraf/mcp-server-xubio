# Herramientas Disponibles

Para más detalles sobre los campos y esquemas devueltos, consulta:
- [Documentación Oficial de la API de Xubio](https://xubio.com/API/documentation/index.html#)
- [Definición Swagger (JSON)](https://xubio.com/API/1.1/swagger.json)

> [!NOTE]
> Actualmente cubrimos **54 de los 54** endpoints de lectura disponibles (100% Paridad).

El servidor expone las siguientes herramientas a través del protocolo MCP organizadas por categorías:

## 📦 Ventas y Compras
- `get_clientes`: Lista completa de clientes.
- `get_productos`: Catálogo de productos de venta.
- `get_facturas`: Facturas de venta realizadas.
- `get_proveedores`: Lista de proveedores.
- `get_facturas_compra`: Facturas de compra recibidas.
- `get_ordenes_compra`: Órdenes de compra emitidas.
- `get_presupuestos`: Presupuestos enviados.
- `get_remitos`: Remitos de venta.
- `get_productos_compra`: Catálogo de productos de compra.
- `get_relacion_comprobantes`: Relación entre facturas y notas de crédito.
- `get_comprobantes_asociados`: Comprobantes asociados a un cliente.

## 💰 Finanzas y Contabilidad
- `get_cobranzas`: Cobranzas registradas.
- `get_pagos`: Pagos realizados (⚠️ Sujeto a errores de API Xubio).
- `get_bancos`: Listado de bancos.
- `get_cuentas_contables`: Plan de cuentas.
- `get_stock`: Stock actual de productos.
- `get_depositos`: Lista de depósitos de mercadería.
- `get_asientos_manuales`: Asientos contables manuales.
- `get_ajustes_stock`: Ajustes de stock realizados.
- `get_centros_costo`: Centros de costo.
- `get_listas_precio`: Listas de precios.
- `get_percepciones`: Percepciones.
- `get_retenciones`: Retenciones.

## ⚙️ Configuración y Maestros
- `get_monedas`: Monedas disponibles.
- `get_paises`: Países.
- `get_provincias`: Provincias.
- `get_localidades`: Localidades.
- `get_tasas_iva`: Alícuotas de IVA.
- `get_vendedores`: Vendedores configurados.
- `get_puntos_venta`: Puntos de venta activos.
- `get_categorias_cuenta`: Categorías de cuentas contables.
- `get_categorias_fiscales`: Categorías fiscales.
- `get_circuitos_contables`: Circuitos contables configurados.
- `get_identificaciones_tributarias`: Tipos de identificación tributaria.
- `get_mi_empresa`: Datos de la empresa actual.
- `get_sucursales`: Sucursales de clientes.
- `get_transportes`: Transportes.
- `get_talonarios`: Talonarios configurados.
- `get_talonario_cobranza`: Talonarios de cobranza.
- `get_unidades_medida`: Unidades de medida.
- `get_actividades_economicas`: Actividades económicas.

## 🆔 Consultas por ID
Todas las entidades principales soportan consulta individual por ID:
- `get_cliente_por_id`
- `get_producto_por_id`
- `get_factura_por_id`
- `get_proveedor_por_id`
- `get_stock_por_producto_id`
- `get_factura_compra_por_id`
- `get_orden_compra_por_id`
- `get_presupuesto_por_id`
- `get_asiento_manual_por_id`
- `get_ajuste_stock_por_id`
- `get_lista_precio_por_id`
- `get_cuenta_contable_por_id`

## 📄 Utilidades
- `get_pdf_url`: Obtiene la URL pública del PDF de un comprobante (Requiere `idtransaccion` y `tipoimpresion`).
