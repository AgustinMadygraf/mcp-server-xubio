# Software Requirements Specification (SRS) - Xubio MCP Server

## 1. Introducción
Este documento define los requisitos y especificaciones técnicas para el servidor MCP (Model Context Protocol) de Xubio. El objetivo es permitir que modelos de IA interactúen con la plataforma Xubio de manera segura y estructurada.

## 2. Propósito y Alcance
El servidor actúa como un puente entre el protocolo MCP y la API REST de Xubio (v1.1). Su alcance está limitado estrictamente a operaciones de consulta para garantizar la integridad de los datos contables del usuario.

## 3. Requisitos Funcionales
### 3.1 Consultas de Datos (Solo Lectura)
- El sistema **solo** debe implementar métodos HTTP `GET`.
- Se prohíbe explícitamente cualquier operación de escritura (`POST`, `PUT`, `DELETE`, `PATCH`).
- Las herramientas deben retornar datos estructurados en formato JSON-RPC 2.0.

### 3.2 Autenticación
- Uso de OAuth2 (Client Credentials).
- Gestión automática del ciclo de vida del token (renovación proactiva y reactiva).
- Soporte para el error específico de Xubio `"token died"`.

## 4. Requisitos No Funcionales
### 4.1 Arquitectura
- **Arquitectura Limpia (Clean Architecture)**: Separación clara entre Dominio, Aplicación e Infraestructura.
- **Principios SOLID**: Código mantenible, extensible y testeable.
- **DDD (Domain-Driven Design)**: Uso de entidades y repositorios que reflejen el lenguaje del negocio.

### 4.2 Seguridad
- Las credenciales deben manejarse exclusivamente mediante variables de entorno o archivos de configuración locales del usuario.
- No se deben persistir tokens en disco; deben mantenerse en memoria.

### 4.3 Trazabilidad y Diagnóstico
- Implementación de logs vía `stderr` para no contaminar el canal de datos `stdio`.
- Prefijos claros para identificación de logs: `[Auth]` y `[MCP]`.

## 5. Restricciones Técnicas
- **Lenguaje**: TypeScript.
- **Transporte**: `stdio` (estándar MCP).
- **Dependencias Críticas**: `@modelcontextprotocol/sdk`, `axios`, `zod`, `dotenv`.
