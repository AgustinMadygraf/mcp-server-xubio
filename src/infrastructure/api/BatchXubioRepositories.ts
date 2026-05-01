import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { 
  IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository, IPagoRepository, IBancoRepository, ICuentaContableRepository, 
  IPresupuestoRepository, IRemitoRepository, IVendedorRepository, IPuntoVentaRepository,
  IMonedaRepository, IPaisRepository, IProvinciaRepository, ILocalidadRepository, ITasaIvaRepository, IActividadEconomicaRepository, IUnidadMedidaRepository,
  IAsientoManualRepository, IAjusteStockRepository, ICentroDeCostoRepository, IListaPrecioRepository, ICategoriaCuentaRepository, ICategoriaFiscalRepository, ICircuitoContableRepository, IIdentificacionTributariaRepository,
  IMiEmpresaRepository, IPercepcionRepository, IRetencionRepository, ISucursalRepository, ITransporteRepository, ITalonarioRepository, ITalonarioCobranzaRepository, IUnidadMedidaFinalRepository, IProductoCompraRepository, IRelacionComprobanteRepository, IComprobantesAsociadosRepository, IPDFRepository
} from "../../domain/repositories/IBatchRepositories.js";
import { FacturaCompra } from "../../domain/entities/FacturaCompra.js";
import { OrdenCompra } from "../../domain/entities/OrdenCompra.js";
import { Deposito } from "../../domain/entities/Deposito.js";
import { Pago } from "../../domain/entities/Pago.js";
import { Banco } from "../../domain/entities/Banco.js";
import { CuentaContable } from "../../domain/entities/CuentaContable.js";
import { Presupuesto } from "../../domain/entities/Presupuesto.js";
import { Remito } from "../../domain/entities/Remito.js";
import { Vendedor } from "../../domain/entities/Vendedor.js";
import { PuntoVenta } from "../../domain/entities/PuntoVenta.js";
import { Moneda, Pais, Provincia, Localidad, TasaIva, ActividadEconomica, UnidadMedida } from "../../domain/entities/ConfigEntities.js";
import { AsientoManual, AjusteStock, CentroDeCosto, ListaPrecio, CategoriaCuenta, CategoriaFiscal, CircuitoContable, IdentificacionTributaria } from "../../domain/entities/AccountingEntities.js";
import { MiEmpresa, Percepcion, Retencion, Sucursal, Transporte, Talonario, UnidadMedidaFinal, ProductoCompra, RelacionComprobante } from "../../domain/entities/MiscEntities.js";

export class XubioFacturaCompraRepository extends XubioBaseRepository implements IFacturaCompraRepository { async findAll(params?: any) { return await this.get("comprobanteCompraBean", params); } async findById(id: string | number) { return await this.getById("comprobanteCompraBean", id); } }
export class XubioOrdenCompraRepository extends XubioBaseRepository implements IOrdenCompraRepository { async findAll(params?: any) { return await this.get("ordenCompraBean", params); } async findById(id: string | number) { return await this.getById("ordenCompraBean", id); } }
export class XubioDepositoRepository extends XubioBaseRepository implements IDepositoRepository { async findAll(params?: any) { return await this.get("depositos", params); } }
export class XubioPagoRepository extends XubioBaseRepository implements IPagoRepository { async findAll(params?: any) { return await this.get("pagoBean", params); } }
export class XubioBancoRepository extends XubioBaseRepository implements IBancoRepository { async findAll(params?: any) { return await this.get("banco", params); } }
export class XubioCuentaContableRepository extends XubioBaseRepository implements ICuentaContableRepository { async findAll(params?: any) { return await this.get("cuenta", params); } async findById(id: string | number) { return await this.getById("cuenta", id); } }
export class XubioPresupuestoRepository extends XubioBaseRepository implements IPresupuestoRepository { async findAll(params?: any) { return await this.get("presupuestoBean", params); } async findById(id: string | number) { return await this.getById("presupuestoBean", id); } }
export class XubioRemitoRepository extends XubioBaseRepository implements IRemitoRepository { async findAll(params?: any) { return await this.get("remitoVentaBean", params); } }
export class XubioVendedorRepository extends XubioBaseRepository implements IVendedorRepository { async findAll(params?: any) { return await this.get("vendedorBean", params); } }
export class XubioPuntoVentaRepository extends XubioBaseRepository implements IPuntoVentaRepository { async findAll(params?: any) { return await this.get("puntoVentaBean", params); } }
export class XubioMonedaRepository extends XubioBaseRepository implements IMonedaRepository { async findAll(params?: any) { return await this.get("monedaBean", params); } }
export class XubioPaisRepository extends XubioBaseRepository implements IPaisRepository { async findAll(params?: any) { return await this.get("paisBean", params); } }
export class XubioProvinciaRepository extends XubioBaseRepository implements IProvinciaRepository { async findAll(params?: any) { return await this.get("provinciaBean", params); } }
export class XubioLocalidadRepository extends XubioBaseRepository implements ILocalidadRepository { async findAll(params?: any) { return await this.get("localidadBean", params); } }
export class XubioTasaIvaRepository extends XubioBaseRepository implements ITasaIvaRepository { async findAll(params?: any) { return await this.get("tasaImpositiva", params); } }
export class XubioActividadEconomicaRepository extends XubioBaseRepository implements IActividadEconomicaRepository { async findAll(params?: any) { return await this.get("actividadEconomicaBean", params); } }
export class XubioUnidadMedidaRepository extends XubioBaseRepository implements IUnidadMedidaRepository { async findAll(params?: any) { return await this.get("unidadMedidaBean", params); } }
export class XubioAsientoManualRepository extends XubioBaseRepository implements IAsientoManualRepository { async findAll(params?: any) { return await this.get("asientoContableManualBean", params); } async findById(id: string | number) { return await this.getById("asientoContableManualBean", id); } }
export class XubioAjusteStockRepository extends XubioBaseRepository implements IAjusteStockRepository { async findAll(params?: any) { return await this.get("ajusteStockBean", params); } async findById(id: string | number) { return await this.getById("ajusteStockBean", id); } }
export class XubioCentroDeCostoRepository extends XubioBaseRepository implements ICentroDeCostoRepository { async findAll(params?: any) { return await this.get("centroDeCostoBean", params); } }
export class XubioListaPrecioRepository extends XubioBaseRepository implements IListaPrecioRepository { async findAll(params?: any) { return await this.get("listaPrecioBean", params); } async findById(id: string | number) { return await this.getById("listaPrecioBean", id); } }
export class XubioCategoriaCuentaRepository extends XubioBaseRepository implements ICategoriaCuentaRepository { async findAll(params?: any) { return await this.get("categoriaCuenta", params); } }
export class XubioCategoriaFiscalRepository extends XubioBaseRepository implements ICategoriaFiscalRepository { async findAll(params?: any) { return await this.get("categoriaFiscal", params); } }
export class XubioCircuitoContableRepository extends XubioBaseRepository implements ICircuitoContableRepository { async findAll(params?: any) { return await this.get("circuitoContableBean", params); } }
export class XubioIdentificacionTributariaRepository extends XubioBaseRepository implements IIdentificacionTributariaRepository { async findAll(params?: any) { return await this.get("identificacionTributaria", params); } }

export class XubioMiEmpresaRepository extends XubioBaseRepository implements IMiEmpresaRepository { async findAll(params?: any) { return await this.get("miempresa", params); } }
export class XubioPercepcionRepository extends XubioBaseRepository implements IPercepcionRepository { async findAll(params?: any) { return await this.get("percepcionBean", params); } }
export class XubioRetencionRepository extends XubioBaseRepository implements IRetencionRepository { async findAll(params?: any) { return await this.get("retencionBean", params); } }
export class XubioSucursalRepository extends XubioBaseRepository implements ISucursalRepository { async findAll(params?: any) { return await this.get("sucursalClienteBean", params); } }
export class XubioTransporteRepository extends XubioBaseRepository implements ITransporteRepository { async findAll(params?: any) { return await this.get("transporteBean", params); } }
export class XubioTalonarioRepository extends XubioBaseRepository implements ITalonarioRepository { async findAll(params?: any) { return await this.get("talonario", params); } }
export class XubioTalonarioCobranzaRepository extends XubioBaseRepository implements ITalonarioCobranzaRepository { async findAll(params?: any) { return await this.get("talonarioCobranza", params); } }
export class XubioUnidadMedidaFinalRepository extends XubioBaseRepository implements IUnidadMedidaFinalRepository { async findAll(params?: any) { return await this.get("unidadMedida", params); } }
export class XubioProductoCompraRepository extends XubioBaseRepository implements IProductoCompraRepository { async findAll(params?: any) { return await this.get("ProductoCompraBean", params); } }
export class XubioRelacionComprobanteRepository extends XubioBaseRepository implements IRelacionComprobanteRepository { async findAll(params?: any) { return await this.get("relacionFacturaNotaDeCredito", params); } }
export class XubioComprobantesAsociadosRepository extends XubioBaseRepository implements IComprobantesAsociadosRepository { async findAll(params?: any) { return await this.get("comprobantesAsociados", params); } }
export class XubioPDFRepository extends XubioBaseRepository implements IPDFRepository { async findAll(params?: any) { return await this.get("imprimirPDF", params); } }
