# Depuración y Logs

El servidor MCP de Xubio implementa un sistema de logs detallado para facilitar la monitorización y el diagnóstico de errores.

## Visualización de Logs

Dado que el servidor utiliza el transporte `stdio`, todos los logs de depuración se envían a la consola de errores estándar (`stderr`). Esto evita interferir con los mensajes JSON-RPC que viajan por `stdout`.

Puedes ver estos logs en:
- La consola de depuración de **Claude Desktop**.
- Los logs de salida de **Antigravity** o **Gemini CLI**.
- La terminal si ejecutas el servidor manualmente (aunque se espera que lo haga un cliente MCP).

## Tipos de Logs

### 1. Logs de Autenticación
Identificados con el prefijo `[Auth]`. Registran el ciclo de vida de los tokens OAuth2.
- Solicitud de nuevos tokens.
- Renovación tras error "token died".
- Invalidadación proactiva.

### 2. Logs de MCP
Identificados con el prefijo `[MCP]`. Registran la actividad de las herramientas.
- Llamadas a herramientas (`get_clientes`, `get_productos`, etc.).
- Cantidad de registros recuperados.
- Errores de procesamiento detallados.

## Ejemplo de Salida
```text
[Auth] Solicitando nuevo token a Xubio...
[Auth] Token obtenido exitosamente.
[MCP] Petición procesada exitosamente. Registros: 42
[MCP] Error procesando petición: Network Error
```
