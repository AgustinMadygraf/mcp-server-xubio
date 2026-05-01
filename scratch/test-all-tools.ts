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
  XubioMonedaRepository, XubioPaisRepository, XubioProvinciaRepository, XubioLocalidadRepository, XubioTasaIvaRepository,
  XubioAsientoManualRepository, XubioAjusteStockRepository, XubioCentroDeCostoRepository, XubioListaPrecioRepository, XubioCategoriaCuentaRepository, XubioCategoriaFiscalRepository, XubioCircuitoContableRepository, XubioIdentificacionTributariaRepository,
  XubioMiEmpresaRepository, XubioPercepcionRepository, XubioRetencionRepository, XubioSucursalRepository, XubioTransporteRepository, XubioTalonarioRepository, XubioUnidadMedidaFinalRepository, XubioProductoCompraRepository, XubioRelacionComprobanteRepository, XubioComprobantesAsociadosRepository
} from "../src/infrastructure/api/BatchXubioRepositories.js";
import dotenv from "dotenv";

dotenv.config();

async function runTests() {
  const auth = new XubioAuthService(process.env.XUBIO_CLIENT_ID!, process.env.XUBIO_SECRET_ID!);
  
  const repos = [
    { name: "Clientes", repo: new XubioClienteRepository(auth) },
    { name: "Productos Venta", repo: new XubioProductoRepository(auth) },
    { name: "Productos Compra", repo: new XubioProductoCompraRepository(auth) },
    { name: "Facturas Venta", repo: new XubioFacturaRepository(auth) },
    { name: "Proveedores", repo: new XubioProveedorRepository(auth) },
    { name: "Stock", repo: new XubioStockRepository(auth) },
    { name: "Cobranzas", repo: new XubioCobranzaRepository(auth) },
    { name: "Facturas Compra", repo: new XubioFacturaCompraRepository(auth) },
    { name: "Ordenes Compra", repo: new XubioOrdenCompraRepository(auth) },
    { name: "Depositos", repo: new XubioDepositoRepository(auth) },
    { name: "Pagos", repo: new XubioPagoRepository(auth) },
    { name: "Bancos", repo: new XubioBancoRepository(auth) },
    { name: "Cuentas Cont.", repo: new XubioCuentaContableRepository(auth) },
    { name: "Presupuestos", repo: new XubioPresupuestoRepository(auth) },
    { name: "Remitos", repo: new XubioRemitoRepository(auth) },
    { name: "Vendedores", repo: new XubioVendedorRepository(auth) },
    { name: "Puntos Venta", repo: new XubioPuntoVentaRepository(auth) },
    { name: "Monedas", repo: new XubioMonedaRepository(auth) },
    { name: "Paises", repo: new XubioPaisRepository(auth) },
    { name: "Provincias", repo: new XubioProvinciaRepository(auth) },
    { name: "Localidades", repo: new XubioLocalidadRepository(auth) },
    { name: "Tasas IVA", repo: new XubioTasaIvaRepository(auth) },
    { name: "Asientos Man.", repo: new XubioAsientoManualRepository(auth) },
    { name: "Ajustes Stock", repo: new XubioAjusteStockRepository(auth) },
    { name: "Centros Costo", repo: new XubioCentroDeCostoRepository(auth) },
    { name: "Listas Precio", repo: new XubioListaPrecioRepository(auth) },
    { name: "Cat. Cuenta", repo: new XubioCategoriaCuentaRepository(auth) },
    { name: "Cat. Fiscal", repo: new XubioCategoriaFiscalRepository(auth) },
    { name: "Circuitos Cont.", repo: new XubioCircuitoContableRepository(auth) },
    { name: "Id. Tributaria", repo: new XubioIdentificacionTributariaRepository(auth) },
    { name: "Mi Empresa", repo: new XubioMiEmpresaRepository(auth) },
    { name: "Percepciones", repo: new XubioPercepcionRepository(auth) },
    { name: "Retenciones", repo: new XubioRetencionRepository(auth) },
    { name: "Sucursales", repo: new XubioSucursalRepository(auth) },
    { name: "Transportes", repo: new XubioTransporteRepository(auth) },
    { name: "Talonarios", repo: new XubioTalonarioRepository(auth) },
    { name: "Unidades Med.", repo: new XubioUnidadMedidaFinalRepository(auth) },
    { name: "Rel. Comprob.", repo: new XubioRelacionComprobanteRepository(auth) },
    { name: "Comp. Asoc.", repo: new XubioComprobantesAsociadosRepository(auth) },
  ];

  console.log("🚀 Iniciando suite de pruebas de regresión FINAL (100% Coverage)...\n");

  for (const item of repos) {
    try {
      const data = await item.repo.findAll();
      console.log(`✅ ${item.name.padEnd(15)}: OK (${Array.isArray(data) ? data.length : '1'} registros)`);
    } catch (error: any) {
      console.log(`❌ ${item.name.padEnd(15)}: FALLÓ - ${error.message}`);
    }
  }
}

runTests().catch(console.error);
