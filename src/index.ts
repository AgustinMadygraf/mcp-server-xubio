import { XubioAuthService } from "./infrastructure/api/XubioAuthService.js";
import { XubioClienteRepository } from "./infrastructure/api/XubioClienteRepository.js";
import { XubioProductoRepository } from "./infrastructure/api/XubioProductoRepository.js";
import { XubioFacturaRepository } from "./infrastructure/api/XubioFacturaRepository.js";
import { XubioProveedorRepository } from "./infrastructure/api/XubioProveedorRepository.js";
import { XubioStockRepository } from "./infrastructure/api/XubioStockRepository.js";
import { XubioCobranzaRepository } from "./infrastructure/api/XubioCobranzaRepository.js";
import { 
  XubioFacturaCompraRepository, XubioOrdenCompraRepository, XubioDepositoRepository, XubioPagoRepository, XubioBancoRepository, XubioCuentaContableRepository, 
  XubioPresupuestoRepository, XubioRemitoRepository, XubioVendedorRepository, XubioPuntoVentaRepository,
  XubioMonedaRepository, XubioPaisRepository, XubioProvinciaRepository, XubioLocalidadRepository, XubioTasaIvaRepository, XubioActividadEconomicaRepository, XubioUnidadMedidaRepository,
  XubioAsientoManualRepository, XubioAjusteStockRepository, XubioCentroDeCostoRepository, XubioListaPrecioRepository, XubioCategoriaCuentaRepository, XubioCategoriaFiscalRepository, XubioCircuitoContableRepository, XubioIdentificacionTributariaRepository,
  XubioMiEmpresaRepository, XubioPercepcionRepository, XubioRetencionRepository, XubioSucursalRepository, XubioTransporteRepository, XubioTalonarioRepository, XubioTalonarioCobranzaRepository, XubioUnidadMedidaFinalRepository, XubioProductoCompraRepository, XubioRelacionComprobanteRepository, XubioComprobantesAsociadosRepository, XubioPDFRepository
} from "./infrastructure/api/BatchXubioRepositories.js";

import { GetClientesUseCase } from "./application/use-cases/GetClientesUseCase.js";
import { GetProductosUseCase } from "./application/use-cases/GetProductosUseCase.js";
import { GetFacturasUseCase } from "./application/use-cases/GetFacturasUseCase.js";
import { GetProveedoresUseCase } from "./application/use-cases/GetProveedoresUseCase.js";
import { GetStockUseCase } from "./application/use-cases/GetStockUseCase.js";
import { GetCobranzasUseCase } from "./application/use-cases/GetCobranzasUseCase.js";
import { 
  GetFacturasCompraUseCase, GetOrdenesCompraUseCase, GetDepositosUseCase, GetPagosUseCase, GetBancosUseCase, GetCuentasContablesUseCase, 
  GetPresupuestosUseCase, GetRemitosUseCase, GetVendedoresUseCase, GetPuntosVentaUseCase,
  GetMonedasUseCase, GetPaisesUseCase, GetProvinciasUseCase, GetLocalidadesUseCase, GetTasasIvaUseCase, GetActividadesEconomicasUseCase, GetUnidadesMedidaUseCase,
  GetAsientosManualesUseCase, GetAjustesStockUseCase, GetCentrosDeCostoUseCase, GetListasPrecioUseCase, GetCategoriasCuentaUseCase, GetCategoriasFiscalesUseCase, GetCircuitosContablesUseCase, GetIdentificacionesTributariasUseCase,
  GetMiEmpresaUseCase, GetPercepcionesUseCase, GetRetencionesUseCase, GetSucursalesUseCase, GetTransportesUseCase, GetTalonariosUseCase, GetTalonariosCobranzaUseCase, GetUnidadesMedidaFinalUseCase, GetProductosCompraUseCase, GetRelacionComprobantesUseCase, GetComprobantesAsociadosUseCase, GetPDFUseCase
} from "./application/use-cases/BatchUseCases.js";
import {
  GetClienteByIdUseCase, GetProductoByIdUseCase, GetFacturaByIdUseCase, GetProveedorByIdUseCase, GetStockByProductoIdUseCase,
  GetFacturaCompraByIdUseCase, GetOrdenCompraByIdUseCase, GetPresupuestoByIdUseCase, GetAsientoManualByIdUseCase, GetAjusteStockByIdUseCase, GetListaPrecioByIdUseCase, GetCuentaContableByIdUseCase
} from "./application/use-cases/GetByIdUseCases.js";

import { validateConfig } from "./infrastructure/config/Config.js";
import { McpServer } from "./infrastructure/mcp/McpServer.js";
import { ToolRegistry } from "./infrastructure/mcp/ToolRegistry.js";

async function main() {
  const config = validateConfig();

  // Infrastructure
  const authService = new XubioAuthService(config.clientId, config.secretId);
  const registry = ToolRegistry.getInstance();

  // Helper to register tools easily
  const registerTool = (name: string, useCaseOrHandler: any, description?: string) => {
    if (useCaseOrHandler.useCase) {
      registry.register(name, useCaseOrHandler);
    } else {
      registry.register(name, { useCase: useCaseOrHandler, description: description! });
    }
  };

  // REPOSITORIES & USE CASES (Bloque 1-6)
  registerTool("get_clientes", new GetClientesUseCase(new XubioClienteRepository(authService)), "Obtener la lista de clientes de Xubio");
  registerTool("get_productos", new GetProductosUseCase(new XubioProductoRepository(authService)), "Obtener la lista de productos de venta de Xubio");
  registerTool("get_facturas", new GetFacturasUseCase(new XubioFacturaRepository(authService)), "Obtener la lista de facturas de venta de Xubio");
  registerTool("get_proveedores", new GetProveedoresUseCase(new XubioProveedorRepository(authService)), "Obtener la lista de proveedores de Xubio");
  registerTool("get_stock", new GetStockUseCase(new XubioStockRepository(authService)), "Obtener el listado de stock actual");
  registerTool("get_cobranzas", new GetCobranzasUseCase(new XubioCobranzaRepository(authService)), "Obtener el listado de cobranzas");
  registerTool("get_facturas_compra", new GetFacturasCompraUseCase(new XubioFacturaCompraRepository(authService)), "Obtener el listado de facturas de compra");
  registerTool("get_ordenes_compra", new GetOrdenesCompraUseCase(new XubioOrdenCompraRepository(authService)), "Obtener el listado de órdenes de compra");
  registerTool("get_depositos", new GetDepositosUseCase(new XubioDepositoRepository(authService)), "Obtener el listado de depósitos");
  registerTool("get_pagos", new GetPagosUseCase(new XubioPagoRepository(authService)), "Obtener el listado de pagos");
  registerTool("get_bancos", new GetBancosUseCase(new XubioBancoRepository(authService)), "Obtener el listado de bancos");
  registerTool("get_cuentas_contables", new GetCuentasContablesUseCase(new XubioCuentaContableRepository(authService)), "Obtener el listado de cuentas contables");
  registerTool("get_presupuestos", new GetPresupuestosUseCase(new XubioPresupuestoRepository(authService)), "Obtener el listado de presupuestos");
  registerTool("get_remitos", new GetRemitosUseCase(new XubioRemitoRepository(authService)), "Obtener el listado de remitos de venta");
  registerTool("get_vendedores", new GetVendedoresUseCase(new XubioVendedorRepository(authService)), "Obtener el listado de vendedores");
  registerTool("get_puntos_venta", new GetPuntosVentaUseCase(new XubioPuntoVentaRepository(authService)), "Obtener el listado de puntos de venta");
  registerTool("get_monedas", new GetMonedasUseCase(new XubioMonedaRepository(authService)), "Obtener el listado de monedas");
  registerTool("get_paises", new GetPaisesUseCase(new XubioPaisRepository(authService)), "Obtener el listado de países");
  registerTool("get_provincias", new GetProvinciasUseCase(new XubioProvinciaRepository(authService)), "Obtener el listado de provincias");
  registerTool("get_localidades", new GetLocalidadesUseCase(new XubioLocalidadRepository(authService)), "Obtener el listado de localidades");
  registerTool("get_tasas_iva", new GetTasasIvaUseCase(new XubioTasaIvaRepository(authService)), "Obtener el listado de tasas de IVA");
  registerTool("get_actividades_economicas", new GetActividadesEconomicasUseCase(new XubioActividadEconomicaRepository(authService)), "Obtener el listado de actividades económicas");
  registerTool("get_asientos_manuales", new GetAsientosManualesUseCase(new XubioAsientoManualRepository(authService)), "Obtener el listado de asientos contables manuales");
  registerTool("get_ajustes_stock", new GetAjustesStockUseCase(new XubioAjusteStockRepository(authService)), "Obtener el listado de ajustes de stock");
  registerTool("get_centros_costo", new GetCentrosDeCostoUseCase(new XubioCentroDeCostoRepository(authService)), "Obtener el listado de centros de costo");
  registerTool("get_listas_precio", new GetListasPrecioUseCase(new XubioListaPrecioRepository(authService)), "Obtener el listado de listas de precios");
  registerTool("get_categorias_cuenta", new GetCategoriasCuentaUseCase(new XubioCategoriaCuentaRepository(authService)), "Obtener el listado de categorías de cuenta");
  registerTool("get_categorias_fiscales", new GetCategoriasFiscalesUseCase(new XubioCategoriaFiscalRepository(authService)), "Obtener el listado de categorías fiscales");
  registerTool("get_circuitos_contables", new GetCircuitosContablesUseCase(new XubioCircuitoContableRepository(authService)), "Obtener el listado de circuitos contables");
  registerTool("get_identificaciones_tributarias", new GetIdentificacionesTributariasUseCase(new XubioIdentificacionTributariaRepository(authService)), "Obtener el listado de identificaciones tributarias");
  
  // Bloque 6
  registerTool("get_mi_empresa", new GetMiEmpresaUseCase(new XubioMiEmpresaRepository(authService)), "Obtener información de la empresa actual");
  registerTool("get_percepciones", new GetPercepcionesUseCase(new XubioPercepcionRepository(authService)), "Obtener el listado de percepciones");
  registerTool("get_retenciones", new GetRetencionesUseCase(new XubioRetencionRepository(authService)), "Obtener el listado de retenciones");
  registerTool("get_sucursales", new GetSucursalesUseCase(new XubioSucursalRepository(authService)), "Obtener el listado de sucursales de clientes");
  registerTool("get_transportes", new GetTransportesUseCase(new XubioTransporteRepository(authService)), "Obtener el listado de transportes");
  registerTool("get_talonarios", new GetTalonariosUseCase(new XubioTalonarioRepository(authService)), "Obtener el listado de talonarios");
  registerTool("get_talonario_cobranza", new GetTalonariosCobranzaUseCase(new XubioTalonarioCobranzaRepository(authService)), "Obtener el listado de talonarios de cobranza");
  registerTool("get_unidades_medida", new GetUnidadesMedidaFinalUseCase(new XubioUnidadMedidaFinalRepository(authService)), "Obtener el listado de unidades de medida");
  registerTool("get_productos_compra", new GetProductosCompraUseCase(new XubioProductoCompraRepository(authService)), "Obtener el catálogo de productos de compra");
  registerTool("get_relacion_comprobantes", new GetRelacionComprobantesUseCase(new XubioRelacionComprobanteRepository(authService)), "Obtener relación entre facturas y notas de crédito");
  registerTool("get_comprobantes_asociados", {
    useCase: new GetComprobantesAsociadosUseCase(new XubioComprobantesAsociadosRepository(authService)),
    description: "Obtener comprobantes asociados",
    inputSchema: {
      type: "object",
      properties: {
        clienteId: { type: "number", description: "ID del cliente" },
        tipoComprobante: { type: "string", description: "Tipo de comprobante" }
      },
      required: ["clienteId", "tipoComprobante"]
    }
  });

  registerTool("get_pdf_url", {
    useCase: new GetPDFUseCase(new XubioPDFRepository(authService)),
    description: "Obtener la URL del PDF de un comprobante",
    inputSchema: {
      type: "object",
      properties: {
        idtransaccion: { type: "number", description: "ID de la transacción" },
        tipoimpresion: { type: "number", description: "Tipo de impresión (ej. 1)" }
      },
      required: ["idtransaccion", "tipoimpresion"]
    }
  });

  // GET BY ID TOOLS
  const registerByIdTool = (name: string, useCase: any, description: string, idName: string = "id") => {
    registerTool(name, {
      useCase,
      description,
      inputSchema: {
        type: "object",
        properties: {
          [idName]: { type: "number", description: `ID del ${idName.replace("Id", "")}` }
        },
        required: [idName]
      }
    });
  };

  registerByIdTool("get_cliente_por_id", new GetClienteByIdUseCase(new XubioClienteRepository(authService)), "Obtener un cliente por su ID");
  registerByIdTool("get_producto_por_id", new GetProductoByIdUseCase(new XubioProductoRepository(authService)), "Obtener un producto por su ID");
  registerByIdTool("get_factura_por_id", new GetFacturaByIdUseCase(new XubioFacturaRepository(authService)), "Obtener una factura de venta por su ID");
  registerByIdTool("get_proveedor_por_id", new GetProveedorByIdUseCase(new XubioProveedorRepository(authService)), "Obtener un proveedor por su ID");
  registerByIdTool("get_stock_por_producto_id", new GetStockByProductoIdUseCase(new XubioStockRepository(authService)), "Obtener el stock de un producto por su ID", "productoId");
  registerByIdTool("get_factura_compra_por_id", new GetFacturaCompraByIdUseCase(new XubioFacturaCompraRepository(authService)), "Obtener una factura de compra por su ID");
  registerByIdTool("get_orden_compra_por_id", new GetOrdenCompraByIdUseCase(new XubioOrdenCompraRepository(authService)), "Obtener una orden de compra por su ID");
  registerByIdTool("get_presupuesto_por_id", new GetPresupuestoByIdUseCase(new XubioPresupuestoRepository(authService)), "Obtener un presupuesto por su ID");
  registerByIdTool("get_asiento_manual_por_id", new GetAsientoManualByIdUseCase(new XubioAsientoManualRepository(authService)), "Obtener un asiento manual por su ID");
  registerByIdTool("get_ajuste_stock_por_id", new GetAjusteStockByIdUseCase(new XubioAjusteStockRepository(authService)), "Obtener un ajuste de stock por su ID");
  registerByIdTool("get_lista_precio_por_id", new GetListaPrecioByIdUseCase(new XubioListaPrecioRepository(authService)), "Obtener una lista de precio por su ID");
  registerByIdTool("get_cuenta_contable_por_id", new GetCuentaContableByIdUseCase(new XubioCuentaContableRepository(authService)), "Obtener una cuenta contable por su ID");

  // Presentation (MCP)
  const mcpServer = new McpServer();
  mcpServer.run().catch((error) => {
    console.error("Critical error in MCP Server:", error);
    process.exit(1);
  });
}

main().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
