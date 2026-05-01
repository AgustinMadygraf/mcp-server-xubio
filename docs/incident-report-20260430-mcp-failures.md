# Incident Report: MCP Server Failures & Connectivity Issues
**Date:** 2026-04-30
**Status:** Post-Mortem / Partial Recovery
**Reporter:** Gemini CLI (Software Engineering Persona)

## 1. Executive Summary
During a financial audit session, the integration layer between the local MCP servers and external APIs experienced critical failures. As of the latest update, **Xubio connectivity has been partially restored**, allowing data retrieval for Clients, Products, Invoices, and Suppliers. However, the **WooCommerce integration remains offline** due to configuration errors, and significant gaps in API coverage (92.6% pending) prevent a full automated balance preparation for ARCA.

## 2. Incident Timeline
- **10:00 AM:** Initialization of `mcp-server-xubio`.
- **10:05 AM:** Successful execution of `get_clientes`.
- **10:06 AM:** Execution failure for `get_productos`, `get_facturas`, and `get_proveedores` (HTTP 500).
- **10:10 AM:** Initialization of `woocommerce-mcp-server`.
- **10:11 AM:** Complete failure of WooCommerce tools (`get_sales_report`, `get_products`, `get_orders`) due to `Invalid URL`.
- **10:45 AM (Recovery):** `mcp-server-xubio` tools resumed operation. Root cause of 500 errors suspected to be transient API rate-limiting or payload size overflows.

## 3. Technical Breakdown

### 3.1 Xubio MCP Server (Operational with Gaps)
- **Current State:** Tools `get_clientes`, `get_productos`, `get_facturas`, and `get_proveedores` are responding.
- **Coverage Issue:** Only 4 out of 54 Swagger endpoints are implemented (7.4%). Missing critical "Compras" (Purchases) and "Taxes" modules.
- **Data Integrity:** Identified duplicate entries (e.g., "Adrian Mansilla" vs "ADRIAN ISRAEL MANCILLA"). Lack of normalization logic in the `Use Case` layer.
- **Payload Risk:** High volume responses (>100kb) are being transmitted over `stdio` without pagination, increasing the risk of buffer saturation.

### 3.2 WooCommerce MCP Server (Service Down)
- **Observed Behavior:** JSON-RPC error -32000.
- **Root Cause:** `WOOCOMMERCE_URL` environment variable is incorrectly configured or contains placeholder data.
- **Impact:** Total block on sales reconciliation between the online store and the accounting system.

## 4. Architectural Impact
- **Reconciliation Block:** The broken WooCommerce link prevents cross-referencing online orders with Xubio invoices.
- **Fiscal Risk:** The absence of a "Compras" module prevents the calculation of credit fiscal, making the system unfit for ARCA balance presentation.
- **Manual Overhead:** Requires manual intervention to merge duplicate customer identities.

## 5. Recommendations & Action Plan

### Short Term (Immediate Fixes)
1. **Config Sanitization:** Update `WOOCOMMERCE_URL` in `.env` with a valid production endpoint.
2. **Pagination Implementation:** Update `GetFacturasUseCase` and `GetClientesUseCase` to support Xubio's `limit` and `lastTransactionID` parameters.
3. **API Expansion (Priority 1):** Implement `get_facturas_compra` (`/comprobanteCompraBean`) to enable purchase tracking.

### Medium Term (Architectural Improvements)
1. **Fuzzy Matching Service:** Integrate a string similarity utility (e.g., Levenshtein) in the domain layer to flag or merge duplicate entities.
2. **Enhanced Error Middleware:** Implement a logging wrapper for Axios to capture Xubio's detailed error bodies (JSON) instead of generic status codes.
3. **Environment Validation:** Add strict schema validation (Zod) for all `Config` variables at server startup.

---
*Report updated by Gemini CLI - Engineering Suite (2026-04-30 11:00).*
