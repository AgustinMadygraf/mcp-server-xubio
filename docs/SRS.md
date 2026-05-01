# Software Requirements Specification (SRS) - Xubio MCP Server

## 1. Introducción
Este documento define los requisitos y especificaciones técnicas para el servidor MCP (Model Context Protocol) de Xubio. El objetivo es permitir que modelos de IA interactúen con la plataforma Xubio de manera segura y estructurada.

## 2. Propósito y Alcance
El servidor actúa como un puente entre el protocolo MCP y la API REST de Xubio (v1.1). Su alcance cubre el **100% de los endpoints de consulta (GET)** disponibles en la plataforma, permitiendo una observabilidad total de los datos contables, financieros y comerciales.

## 3. Requisitos Funcionales
### 3.1 Consultas de Datos (Lectura Total)
- El sistema implementa **54 herramientas de consulta** que cubren:
    - Ventas (Facturas, Clientes, Presupuestos, Remitos, Vendedores, Puntos de Venta).
    - Compras (Facturas de Compra, Proveedores, Órdenes de Compra).
    - Stock (Existencias, Depósitos, Ajustes).
    - Finanzas (Bancos, Cobranzas, Pagos, Cuentas Contables, Centros de Costo).
    - Contabilidad (Asientos Manuales, Categorías de Cuenta).
    - Configuración (Monedas, Países, Provincias, Localidades, Tasas IVA, Talonarios, Empresa).
- El sistema **solo** implementa métodos HTTP `GET`.
- Se prohíbe explícitamente cualquier operación de escritura.

### 3.2 Autenticación y Resiliencia
- Uso de OAuth2 (Client Credentials).
- Renovación automática de tokens ante el error `"token died"`.
- Interceptores de logging para diagnóstico de errores 401/500 de la API externa.

## 4. Requisitos No Funcionales
### 4.1 Arquitectura
- **Clean Architecture**: Capas de Dominio, Aplicación e Infraestructura totalmente desacopladas.
- **SOLID**: Uso intensivo de Inversión de Dependencias y Principio de Abierto/Cerrado mediante un `ToolRegistry`.
- **DDD**: Entidades de negocio claramente definidas en el dominio.

### 4.2 Trazabilidad
- Logs detallados vía `stderr`.
- Suite de pruebas de regresión integrada (`test-all-tools.ts`).
