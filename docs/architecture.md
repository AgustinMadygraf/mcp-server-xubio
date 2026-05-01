# Arquitectura del Proyecto

Este proyecto sigue los principios de **Clean Architecture** y **Domain-Driven Design (DDD)** para asegurar mantenibilidad y escalabilidad.

## Capas

### 1. Domain (Núcleo)
Contiene las entidades de negocio y las interfaces de los repositorios. Es la capa más interna y no tiene dependencias de librerías externas o detalles de implementación.

- **Entities**: Definiciones de `Cliente`, `Producto`, `Factura`, etc.
- **Repositories**: Interfaces que definen los contratos de persistencia/consulta.

### 2. Application
Orquesta la lógica de negocio a través de **Casos de Uso**. Cada caso de uso representa una acción específica que el sistema puede realizar.

- **Use Cases**: `GetClientesUseCase`, `GetProductosUseCase`, etc.

### 3. Infrastructure
Implementaciones técnicas de los detalles externos.

- **API**: Implementación de repositorios usando Axios y lógica de autenticación con Xubio.
- **MCP**: Configuración del servidor Model Context Protocol y registro de herramientas.

## Principios SOLID Aplicados

- **Single Responsibility (SRP)**: Cada clase tiene una responsabilidad única (ej: `XubioAuthService` solo maneja tokens).
- **Dependency Inversion (DIP)**: Los casos de uso dependen de interfaces (`IClienteRepository`), permitiendo cambiar la implementación de infraestructura sin afectar la lógica de negocio.
- **Open/Closed (OCP)**: El sistema está abierto para extenderse con nuevas herramientas pero cerrado para modificaciones en su estructura base.
