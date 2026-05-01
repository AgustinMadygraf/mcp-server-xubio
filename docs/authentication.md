# Autenticación y Seguridad

El servidor utiliza el flujo **OAuth2 Client Credentials** para comunicarse con la API de Xubio.

## Proceso de Token

1. **Obtención**: Se utiliza el `Client ID` y `Secret ID` para solicitar un token al endpoint `TokenEndpoint` mediante Basic Auth.
2. **Almacenamiento**: El token se guarda en memoria dentro de `XubioAuthService`.
3. **Expiración**: El servicio calcula la expiración basándose en el campo `expires_in` y renueva el token proactivamente si ha expirado.

## Manejo de Errores Críticos

La API de Xubio puede invalidar tokens antes de su expiración teórica. El sistema incluye un **Axios Interceptor** que detecta el error:

```json
{
  "error": "invalid_token",
  "error_description": "token died"
}
```

Al detectar este error, el interceptor:
1. Invalida el token actual en memoria.
2. Solicita un nuevo token automáticamente.
3. Reintenta la petición original con el nuevo token de forma transparente para el usuario.

## Seguridad (Solo GET)

Por diseño y requerimiento, este servidor **solo implementa métodos de lectura (GET)**. No existen casos de uso ni repositorios que permitan mutar datos (POST, PUT, DELETE) en Xubio a través de este servidor MCP.
