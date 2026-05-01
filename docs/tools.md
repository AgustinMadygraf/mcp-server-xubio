# Herramientas Disponibles

Para más detalles sobre los campos y esquemas devueltos, consulta:
- [Documentación Oficial de la API de Xubio](https://xubio.com/API/documentation/index.html#)
- [Definición Swagger (JSON)](https://xubio.com/API/1.1/swagger.json)

> [!NOTE]
> Actualmente cubrimos **39 de los 54** endpoints de lectura disponibles. Consulta el [TODO](TODO.md) para ver el listado completo de endpoints pendientes.

El servidor expone las siguientes herramientas a través del protocolo MCP:

### `get_clientes`
- **Descripción**: Recupera la lista completa de clientes.
- **Endpoint Xubio**: `GET /clienteBean`
- **Uso**: Útil para buscar información de contacto o IDs de clientes existentes.

### `get_productos`
- **Descripción**: Recupera el catálogo de productos y servicios.
- **Endpoint Xubio**: `GET /productoBean`
- **Uso**: Útil para consultar precios, stocks o códigos de productos.

### `get_facturas`
- **Descripción**: Recupera el listado de facturas de venta emitidas.
- **Endpoint Xubio**: `GET /facturaVentaBean`
- **Uso**: Útil para análisis de ventas o seguimiento de comprobantes.

### `get_proveedores`
- **Descripción**: Recupera la lista de proveedores registrados.
- **Endpoint Xubio**: `GET /proveedorBean`
- **Uso**: Útil para gestiones de compras y pagos.
