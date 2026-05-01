import { describe, it, expect, beforeAll } from "vitest";
import { XubioAuthService } from "../src/infrastructure/api/XubioAuthService.js";
import { XubioClienteRepository } from "../src/infrastructure/api/XubioClienteRepository.js";
import { XubioProductoRepository } from "../src/infrastructure/api/XubioProductoRepository.js";
import { XubioFacturaRepository } from "../src/infrastructure/api/XubioFacturaRepository.js";
import { XubioProveedorRepository } from "../src/infrastructure/api/XubioProveedorRepository.js";
import { XubioStockRepository } from "../src/infrastructure/api/XubioStockRepository.js";
import { XubioCobranzaRepository } from "../src/infrastructure/api/XubioCobranzaRepository.js";
import { 
  XubioFacturaCompraRepository, XubioOrdenCompraRepository, XubioDepositoRepository, XubioPagoRepository, XubioBancoRepository, XubioCuentaContableRepository, 
  XubioPresupuestoRepository, XubioRemitoRepository, XubioVendedorRepository, XubioPuntoVentaRepository,
  XubioMonedaRepository, XubioPaisRepository, XubioProvinciaRepository, XubioLocalidadRepository, XubioTasaIvaRepository, XubioActividadEconomicaRepository, XubioUnidadMedidaRepository,
  XubioAsientoManualRepository, XubioAjusteStockRepository, XubioCentroDeCostoRepository, XubioListaPrecioRepository, XubioCategoriaCuentaRepository, XubioCategoriaFiscalRepository, XubioCircuitoContableRepository, XubioIdentificacionTributariaRepository,
  XubioMiEmpresaRepository, XubioPercepcionRepository, XubioRetencionRepository, XubioSucursalRepository, XubioTransporteRepository, XubioTalonarioRepository, XubioTalonarioCobranzaRepository, XubioUnidadMedidaFinalRepository, XubioProductoCompraRepository, XubioRelacionComprobanteRepository, XubioComprobantesAsociadosRepository, XubioPDFRepository
} from "../src/infrastructure/api/BatchXubioRepositories.js";

import { GetClientesUseCase } from "../src/application/use-cases/GetClientesUseCase.js";
import { GetProductosUseCase } from "../src/application/use-cases/GetProductosUseCase.js";
import { GetFacturasUseCase } from "../src/application/use-cases/GetFacturasUseCase.js";
import { GetProveedoresUseCase } from "../src/application/use-cases/GetProveedoresUseCase.js";
import { GetStockUseCase } from "../src/application/use-cases/GetStockUseCase.js";
import { GetCobranzasUseCase } from "../src/application/use-cases/GetCobranzasUseCase.js";
import { 
  GetFacturasCompraUseCase, GetOrdenesCompraUseCase, GetDepositosUseCase, GetPagosUseCase, GetBancosUseCase, GetCuentasContablesUseCase, 
  GetPresupuestosUseCase, GetRemitosUseCase, GetVendedoresUseCase, GetPuntosVentaUseCase,
  GetMonedasUseCase, GetPaisesUseCase, GetProvinciasUseCase, GetLocalidadesUseCase, GetTasasIvaUseCase, GetActividadesEconomicasUseCase, GetUnidadesMedidaUseCase,
  GetAsientosManualesUseCase, GetAjustesStockUseCase, GetCentrosDeCostoUseCase, GetListasPrecioUseCase, GetCategoriasCuentaUseCase, GetCategoriasFiscalesUseCase, GetCircuitosContablesUseCase, GetIdentificacionesTributariasUseCase,
  GetMiEmpresaUseCase, GetPercepcionesUseCase, GetRetencionesUseCase, GetSucursalesUseCase, GetTransportesUseCase, GetTalonariosUseCase, GetTalonariosCobranzaUseCase, GetUnidadesMedidaFinalUseCase, GetProductosCompraUseCase, GetRelacionComprobantesUseCase, GetComprobantesAsociadosUseCase, GetPDFUseCase
} from "../src/application/use-cases/BatchUseCases.js";
import {
  GetClienteByIdUseCase, GetProductoByIdUseCase, GetFacturaByIdUseCase, GetProveedorByIdUseCase, GetStockByProductoIdUseCase,
  GetFacturaCompraByIdUseCase, GetOrdenCompraByIdUseCase, GetPresupuestoByIdUseCase, GetAsientoManualByIdUseCase, GetAjusteStockByIdUseCase, GetListaPrecioByIdUseCase, GetCuentaContableByIdUseCase
} from "../src/application/use-cases/GetByIdUseCases.js";

import { validateConfig } from "../src/infrastructure/config/Config.js";
import { ToolRegistry } from "../src/infrastructure/mcp/ToolRegistry.js";
import dotenv from "dotenv";

dotenv.config();

describe("Xubio Tools Integration Tests", () => {
  let authService: XubioAuthService;
  const registry = ToolRegistry.getInstance();

  // Registro de todas las 54 herramientas al nivel de suite para que vitest las detecte
  const config = validateConfig();
  authService = new XubioAuthService(config.clientId, config.secretId);

  const registerTool = (name: string, useCase: any) => {
    registry.register(name, { useCase, description: "" });
  };

  registerTool("get_clientes", new GetClientesUseCase(new XubioClienteRepository(authService)));
  registerTool("get_productos", new GetProductosUseCase(new XubioProductoRepository(authService)));
  registerTool("get_facturas", new GetFacturasUseCase(new XubioFacturaRepository(authService)));
  registerTool("get_proveedores", new GetProveedoresUseCase(new XubioProveedorRepository(authService)));
  registerTool("get_stock", new GetStockUseCase(new XubioStockRepository(authService)));
  registerTool("get_cobranzas", new GetCobranzasUseCase(new XubioCobranzaRepository(authService)));
  registerTool("get_facturas_compra", new GetFacturasCompraUseCase(new XubioFacturaCompraRepository(authService)));
  registerTool("get_ordenes_compra", new GetOrdenesCompraUseCase(new XubioOrdenCompraRepository(authService)));
  registerTool("get_depositos", new GetDepositosUseCase(new XubioDepositoRepository(authService)));
  registerTool("get_pagos", new GetPagosUseCase(new XubioPagoRepository(authService)));
  registerTool("get_bancos", new GetBancosUseCase(new XubioBancoRepository(authService)));
  registerTool("get_cuentas_contables", new GetCuentasContablesUseCase(new XubioCuentaContableRepository(authService)));
  registerTool("get_presupuestos", new GetPresupuestosUseCase(new XubioPresupuestoRepository(authService)));
  registerTool("get_remitos", new GetRemitosUseCase(new XubioRemitoRepository(authService)));
  registerTool("get_vendedores", new GetVendedoresUseCase(new XubioVendedorRepository(authService)));
  registerTool("get_puntos_venta", new GetPuntosVentaUseCase(new XubioPuntoVentaRepository(authService)));
  registerTool("get_monedas", new GetMonedasUseCase(new XubioMonedaRepository(authService)));
  registerTool("get_paises", new GetPaisesUseCase(new XubioPaisRepository(authService)));
  registerTool("get_provincias", new GetProvinciasUseCase(new XubioProvinciaRepository(authService)));
  registerTool("get_localidades", new GetLocalidadesUseCase(new XubioLocalidadRepository(authService)));
  registerTool("get_tasas_iva", new GetTasasIvaUseCase(new XubioTasaIvaRepository(authService)));
  registerTool("get_actividades_economicas", new GetActividadesEconomicasUseCase(new XubioActividadEconomicaRepository(authService)));
  registerTool("get_asientos_manuales", new GetAsientosManualesUseCase(new XubioAsientoManualRepository(authService)));
  registerTool("get_ajustes_stock", new GetAjustesStockUseCase(new XubioAjusteStockRepository(authService)));
  registerTool("get_centros_costo", new GetCentrosDeCostoUseCase(new XubioCentroDeCostoRepository(authService)));
  registerTool("get_listas_precio", new GetListasPrecioUseCase(new XubioListaPrecioRepository(authService)));
  registerTool("get_categorias_cuenta", new GetCategoriasCuentaUseCase(new XubioCategoriaCuentaRepository(authService)));
  registerTool("get_categorias_fiscales", new GetCategoriasFiscalesUseCase(new XubioCategoriaFiscalRepository(authService)));
  registerTool("get_circuitos_contables", new GetCircuitosContablesUseCase(new XubioCircuitoContableRepository(authService)));
  registerTool("get_identificaciones_tributarias", new GetIdentificacionesTributariasUseCase(new XubioIdentificacionTributariaRepository(authService)));
  registerTool("get_mi_empresa", new GetMiEmpresaUseCase(new XubioMiEmpresaRepository(authService)));
  registerTool("get_percepciones", new GetPercepcionesUseCase(new XubioPercepcionRepository(authService)));
  registerTool("get_retenciones", new GetRetencionesUseCase(new XubioRetencionRepository(authService)));
  registerTool("get_sucursales", new GetSucursalesUseCase(new XubioSucursalRepository(authService)));
  registerTool("get_transportes", new GetTransportesUseCase(new XubioTransporteRepository(authService)));
  registerTool("get_talonarios", new GetTalonariosUseCase(new XubioTalonarioRepository(authService)));
  registerTool("get_talonario_cobranza", new GetTalonariosCobranzaUseCase(new XubioTalonarioCobranzaRepository(authService)));
  registerTool("get_unidades_medida", new GetUnidadesMedidaFinalUseCase(new XubioUnidadMedidaFinalRepository(authService)));
  registerTool("get_productos_compra", new GetProductosCompraUseCase(new XubioProductoCompraRepository(authService)));
  registerTool("get_relacion_comprobantes", new GetRelacionComprobantesUseCase(new XubioRelacionComprobanteRepository(authService)));
  registerTool("get_comprobantes_asociados", new GetComprobantesAsociadosUseCase(new XubioComprobantesAsociadosRepository(authService)));
  registerTool("get_pdf_url", new GetPDFUseCase(new XubioPDFRepository(authService)));

  // IDs
  registerTool("get_cliente_por_id", new GetClienteByIdUseCase(new XubioClienteRepository(authService)));
  registerTool("get_producto_por_id", new GetProductoByIdUseCase(new XubioProductoRepository(authService)));
  registerTool("get_factura_por_id", new GetFacturaByIdUseCase(new XubioFacturaRepository(authService)));
  registerTool("get_proveedor_por_id", new GetProveedorByIdUseCase(new XubioProveedorRepository(authService)));
  registerTool("get_stock_por_producto_id", new GetStockByProductoIdUseCase(new XubioStockRepository(authService)));
  registerTool("get_factura_compra_por_id", new GetFacturaCompraByIdUseCase(new XubioFacturaCompraRepository(authService)));
  registerTool("get_orden_compra_por_id", new GetOrdenCompraByIdUseCase(new XubioOrdenCompraRepository(authService)));
  registerTool("get_presupuesto_por_id", new GetPresupuestoByIdUseCase(new XubioPresupuestoRepository(authService)));
  registerTool("get_asiento_manual_por_id", new GetAsientoManualByIdUseCase(new XubioAsientoManualRepository(authService)));
  registerTool("get_ajuste_stock_por_id", new GetAjusteStockByIdUseCase(new XubioAjusteStockRepository(authService)));
  registerTool("get_lista_precio_por_id", new GetListaPrecioByIdUseCase(new XubioListaPrecioRepository(authService)));
  registerTool("get_cuenta_contable_por_id", new GetCuentaContableByIdUseCase(new XubioCuentaContableRepository(authService)));

  const tools = registry.list();

  it.each(tools)("should execute tool: %s", async (tool) => {
    // Saltamos los que requieren parámetros específicos
    if (tool.name.includes("_por_id") || tool.name.includes("_id") || tool.name === "get_pdf_url" || tool.name === "get_comprobantes_asociados") {
      console.log(`⏩ Saltando ${tool.name} (Requiere parámetros)`);
      return;
    }

    const handler = registry.get(tool.name);
    
    if (tool.name === "get_pagos") {
      try {
        await handler?.useCase.execute();
      } catch (error: any) {
        // Error 500 conocido de Xubio
        expect(error.message).toContain("500");
        console.log("⚠️ get_pagos falló con 500 como se esperaba.");
      }
      return;
    }

    const result = await handler?.useCase.execute();
    expect(result).toBeDefined();
    expect(Array.isArray(result) || typeof result === 'object').toBe(true);
  });
});
