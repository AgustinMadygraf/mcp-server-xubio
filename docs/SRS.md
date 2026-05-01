# Software Requirements Specification (SRS) - Xubio MCP Server

## 1. Introducción
Este documento define los requisitos y especificaciones técnicas para el servidor MCP (Model Context Protocol) de Xubio. El objetivo es permitir que modelos de IA interactúen con la plataforma Xubio de manera segura y estructurada.

## 2. Propósito y Alcance
El servidor actúa como un puente entre el protocolo MCP y la API REST de Xubio (v1.1). Su alcance actual cubre el **100% de los endpoints de consulta (GET)** disponibles en la plataforma, permitiendo una observabilidad total de los datos contables, financieros y comerciales.

## 3. Requisitos Funcionales
### 3.1 Consultas de Datos (Lectura Total)
El sistema implementa **54 herramientas de consulta** organizadas en tres modalidades:

1.  **Listados Masivos**: 41 herramientas para obtener listas de entidades (Clientes, Facturas, Productos, etc.) con soporte para parámetros de filtrado básicos.
2.  **Consultas por ID**: 12 herramientas optimizadas para recuperar una entidad única mediante su identificador numérico, facilitando la precisión en tareas de análisis puntual.
3.  **Utilidades de Documentación**: Herramienta específica para generar URLs de impresión (PDF) de comprobantes.

**Áreas de cobertura:**
- **Ventas**: Facturas, Clientes, Presupuestos, Remitos, Vendedores, Puntos de Venta.
- **Compras**: Facturas de Compra, Proveedores, Órdenes de Compra, Productos de Compra.
- **Stock**: Existencias, Depósitos, Ajustes de Stock.
- **Finanzas**: Bancos, Cobranzas, Pagos, Cuentas Contables, Centros de Costo.
- **Contabilidad**: Asientos Manuales, Categorías de Cuenta, Circuitos Contables.
- **Configuración**: Monedas, Países, Provincias, Localidades, Tasas IVA, Actividades Económicas, Talonarios, Empresa, Sucursales, Transportes.

### 3.2 Restricciones de Operación
- El sistema **solo** implementa métodos HTTP `GET`.
- Se prohíbe explícitamente cualquier operación de escritura (POST, PUT, DELETE) en esta versión.

### 3.3 Autenticación y Resiliencia
- Uso de OAuth2 (Client Credentials) con almacenamiento seguro de tokens en memoria.
- Renovación automática de tokens ante el error `"token died"`.
- Mecanismos de reintento transparente para el usuario final.

## 4. Requisitos No Funcionales
### 4.1 Arquitectura
- **Clean Architecture**: Capas de Dominio, Aplicación e Infraestructura totalmente desacopladas.
- **SOLID & DDD**: Uso de Inversión de Dependencias y un `ToolRegistry` centralizado para facilitar la extensibilidad.
- **Tipado Estricto**: Implementación íntegramente en TypeScript.

### 4.2 Trazabilidad y Calidad
- **Logging**: Interceptores de Axios para depuración de peticiones y respuestas en `stderr`.
- **Validación de Esquemas**: Uso de esquemas JSON para validar los parámetros de entrada de cada herramienta.
- **Verificación**: Suite de pruebas de regresión para validación de la conectividad de las 54 herramientas (`test-all-tools.ts`).
