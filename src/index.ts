#!/usr/bin/env node
import dotenv from "dotenv";
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
  XubioMonedaRepository, XubioPaisRepository, XubioProvinciaRepository, XubioLocalidadRepository, XubioTasaIvaRepository, XubioActividadEconomicaRepository, XubioUnidadMedidaRepository
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
  GetMonedasUseCase, GetPaisesUseCase, GetProvinciasUseCase, GetLocalidadesUseCase, GetTasasIvaUseCase, GetActividadesEconomicasUseCase, GetUnidadesMedidaUseCase
} from "./application/use-cases/BatchUseCases.js";

import { validateConfig } from "./infrastructure/config/Config.js";
import { McpServer } from "./infrastructure/mcp/McpServer.js";
import { ToolRegistry } from "./infrastructure/mcp/ToolRegistry.js";

async function bootstrap() {
  const config = validateConfig();

  // Infrastructure
  const authService = new XubioAuthService(config.clientId, config.secretId);
  
  const clienteRepo = new XubioClienteRepository(authService);
  const productoRepo = new XubioProductoRepository(authService);
  const facturaRepo = new XubioFacturaRepository(authService);
  const proveedorRepo = new XubioProveedorRepository(authService);
  const stockRepo = new XubioStockRepository(authService);
  const cobranzaRepo = new XubioCobranzaRepository(authService);
  const facturaCompraRepo = new XubioFacturaCompraRepository(authService);
  const ordenCompraRepo = new XubioOrdenCompraRepository(authService);
  const depositoRepo = new XubioDepositoRepository(authService);
  const pagoRepo = new XubioPagoRepository(authService);
  const bancoRepo = new XubioBancoRepository(authService);
  const cuentaContableRepo = new XubioCuentaContableRepository(authService);
  const presupuestoRepo = new XubioPresupuestoRepository(authService);
  const remitoRepo = new XubioRemitoRepository(authService);
  const vendedorRepo = new XubioVendedorRepository(authService);
  const puntoVentaRepo = new XubioPuntoVentaRepository(authService);
  const monedaRepo = new XubioMonedaRepository(authService);
  const paisRepo = new XubioPaisRepository(authService);
  const provinciaRepo = new XubioProvinciaRepository(authService);
  const localidadRepo = new XubioLocalidadRepository(authService);
  const tasaIvaRepo = new XubioTasaIvaRepository(authService);

  // Application (Use Cases)
  const getClientesUseCase = new GetClientesUseCase(clienteRepo);
  const getProductosUseCase = new GetProductosUseCase(productoRepo);
  const getFacturasUseCase = new GetFacturasUseCase(facturaRepo);
  const getProveedoresUseCase = new GetProveedoresUseCase(proveedorRepo);
  const getStockUseCase = new GetStockUseCase(stockRepo);
  const getCobranzasUseCase = new GetCobranzasUseCase(cobranzaRepo);
  const getFacturasCompraUseCase = new GetFacturasCompraUseCase(facturaCompraRepo);
  const getOrdenesCompraUseCase = new GetOrdenesCompraUseCase(ordenCompraRepo);
  const getDepositosUseCase = new GetDepositosUseCase(depositoRepo);
  const getPagosUseCase = new GetPagosUseCase(pagoRepo);
  const getBancosUseCase = new GetBancosUseCase(bancoRepo);
  const getCuentasContablesUseCase = new GetCuentasContablesUseCase(cuentaContableRepo);
  const getPresupuestosUseCase = new GetPresupuestosUseCase(presupuestoRepo);
  const getRemitosUseCase = new GetRemitosUseCase(remitoRepo);
  const getVendedoresUseCase = new GetVendedoresUseCase(vendedorRepo);
  const getPuntosVentaUseCase = new GetPuntosVentaUseCase(puntoVentaRepo);
  const getMonedasUseCase = new GetMonedasUseCase(monedaRepo);
  const getPaisesUseCase = new GetPaisesUseCase(paisRepo);
  const getProvinciasUseCase = new GetProvinciasUseCase(provinciaRepo);
  const getLocalidadesUseCase = new GetLocalidadesUseCase(localidadRepo);
  const getTasasIvaUseCase = new GetTasasIvaUseCase(tasaIvaRepo);

  // Register Tools
  const registry = ToolRegistry.getInstance();
  
  registry.register("get_clientes", {
    useCase: getClientesUseCase,
    description: "Obtener la lista de clientes de Xubio",
  });
  
  registry.register("get_productos", {
    useCase: getProductosUseCase,
    description: "Obtener la lista de productos de venta de Xubio",
  });
  
  registry.register("get_facturas", {
    useCase: getFacturasUseCase,
    description: "Obtener la lista de facturas de venta de Xubio",
  });
  
  registry.register("get_proveedores", {
    useCase: getProveedoresUseCase,
    description: "Obtener la lista de proveedores de Xubio",
  });
  
  registry.register("get_stock", {
    useCase: getStockUseCase,
    description: "Obtener el listado de stock actual de los productos de Xubio",
  });

  registry.register("get_cobranzas", {
    useCase: getCobranzasUseCase,
    description: "Obtener el listado de cobranzas de Xubio",
  });

  registry.register("get_facturas_compra", {
    useCase: getFacturasCompraUseCase,
    description: "Obtener el listado de facturas de compra de Xubio",
  });

  registry.register("get_ordenes_compra", {
    useCase: getOrdenesCompraUseCase,
    description: "Obtener el listado de órdenes de compra de Xubio",
  });

  registry.register("get_depositos", {
    useCase: getDepositosUseCase,
    description: "Obtener el listado de depósitos de Xubio",
  });

  registry.register("get_pagos", {
    useCase: getPagosUseCase,
    description: "Obtener el listado de pagos de Xubio",
  });

  registry.register("get_bancos", {
    useCase: getBancosUseCase,
    description: "Obtener el listado de bancos de Xubio",
  });

  registry.register("get_cuentas_contables", {
    useCase: getCuentasContablesUseCase,
    description: "Obtener el listado de cuentas contables de Xubio",
  });

  registry.register("get_presupuestos", {
    useCase: getPresupuestosUseCase,
    description: "Obtener el listado de presupuestos de Xubio",
  });

  registry.register("get_remitos", {
    useCase: getRemitosUseCase,
    description: "Obtener el listado de remitos de venta de Xubio",
  });

  registry.register("get_vendedores", {
    useCase: getVendedoresUseCase,
    description: "Obtener el listado de vendedores de Xubio",
  });

  registry.register("get_puntos_venta", {
    useCase: getPuntosVentaUseCase,
    description: "Obtener el listado de puntos de venta de Xubio",
  });

  registry.register("get_monedas", {
    useCase: getMonedasUseCase,
    description: "Obtener el listado de monedas de Xubio",
  });

  registry.register("get_paises", {
    useCase: getPaisesUseCase,
    description: "Obtener el listado de países de Xubio",
  });

  registry.register("get_provincias", {
    useCase: getProvinciasUseCase,
    description: "Obtener el listado de provincias de Xubio",
  });

  registry.register("get_localidades", {
    useCase: getLocalidadesUseCase,
    description: "Obtener el listado de localidades de Xubio",
  });

  registry.register("get_tasas_iva", {
    useCase: getTasasIvaUseCase,
    description: "Obtener el listado de tasas de IVA de Xubio",
  });

  // Presentation (MCP)
  const mcpServer = new McpServer();

  await mcpServer.run().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

bootstrap();
