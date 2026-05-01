import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { 
  IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository, IPagoRepository, IBancoRepository, ICuentaContableRepository, 
  IPresupuestoRepository, IRemitoRepository, IVendedorRepository, IPuntoVentaRepository,
  IMonedaRepository, IPaisRepository, IProvinciaRepository, ILocalidadRepository, ITasaIvaRepository, IActividadEconomicaRepository, IUnidadMedidaRepository,
  IAsientoManualRepository, IAjusteStockRepository, ICentroDeCostoRepository, IListaPrecioRepository, ICategoriaCuentaRepository, ICategoriaFiscalRepository, ICircuitoContableRepository, IIdentificacionTributariaRepository,
  IMiEmpresaRepository, IPercepcionRepository, IRetencionRepository, ISucursalRepository, ITransporteRepository, ITalonarioRepository, IUnidadMedidaFinalRepository, IProductoCompraRepository, IRelacionComprobanteRepository, IComprobantesAsociadosRepository
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

export class XubioFacturaCompraRepository extends XubioBaseRepository implements IFacturaCompraRepository { async findAll() { return await this.get("comprobanteCompraBean"); } }
export class XubioOrdenCompraRepository extends XubioBaseRepository implements IOrdenCompraRepository { async findAll() { return await this.get("ordenCompraBean"); } }
export class XubioDepositoRepository extends XubioBaseRepository implements IDepositoRepository { async findAll() { return await this.get("depositos"); } }
export class XubioPagoRepository extends XubioBaseRepository implements IPagoRepository { async findAll() { return await this.get("pagoBean"); } }
export class XubioBancoRepository extends XubioBaseRepository implements IBancoRepository { async findAll() { return await this.get("banco"); } }
export class XubioCuentaContableRepository extends XubioBaseRepository implements ICuentaContableRepository { async findAll() { return await this.get("cuenta"); } }
export class XubioPresupuestoRepository extends XubioBaseRepository implements IPresupuestoRepository { async findAll() { return await this.get("presupuestoBean"); } }
export class XubioRemitoRepository extends XubioBaseRepository implements IRemitoRepository { async findAll() { return await this.get("remitoVentaBean"); } }
export class XubioVendedorRepository extends XubioBaseRepository implements IVendedorRepository { async findAll() { return await this.get("vendedorBean"); } }
export class XubioPuntoVentaRepository extends XubioBaseRepository implements IPuntoVentaRepository { async findAll() { return await this.get("puntoVentaBean"); } }
export class XubioMonedaRepository extends XubioBaseRepository implements IMonedaRepository { async findAll() { return await this.get("monedaBean"); } }
export class XubioPaisRepository extends XubioBaseRepository implements IPaisRepository { async findAll() { return await this.get("paisBean"); } }
export class XubioProvinciaRepository extends XubioBaseRepository implements IProvinciaRepository { async findAll() { return await this.get("provinciaBean"); } }
export class XubioLocalidadRepository extends XubioBaseRepository implements ILocalidadRepository { async findAll() { return await this.get("localidadBean"); } }
export class XubioTasaIvaRepository extends XubioBaseRepository implements ITasaIvaRepository { async findAll() { return await this.get("tasaImpositiva"); } }
export class XubioActividadEconomicaRepository extends XubioBaseRepository implements IActividadEconomicaRepository { async findAll() { return await this.get("actividadEconomicaBean"); } }
export class XubioUnidadMedidaRepository extends XubioBaseRepository implements IUnidadMedidaRepository { async findAll() { return await this.get("unidadMedidaBean"); } }
export class XubioAsientoManualRepository extends XubioBaseRepository implements IAsientoManualRepository { async findAll() { return await this.get("asientoContableManualBean"); } }
export class XubioAjusteStockRepository extends XubioBaseRepository implements IAjusteStockRepository { async findAll() { return await this.get("ajusteStockBean"); } }
export class XubioCentroDeCostoRepository extends XubioBaseRepository implements ICentroDeCostoRepository { async findAll() { return await this.get("centroDeCostoBean"); } }
export class XubioListaPrecioRepository extends XubioBaseRepository implements IListaPrecioRepository { async findAll() { return await this.get("listaPrecioBean"); } }
export class XubioCategoriaCuentaRepository extends XubioBaseRepository implements ICategoriaCuentaRepository { async findAll() { return await this.get("categoriaCuenta"); } }
export class XubioCategoriaFiscalRepository extends XubioBaseRepository implements ICategoriaFiscalRepository { async findAll() { return await this.get("categoriaFiscal"); } }
export class XubioCircuitoContableRepository extends XubioBaseRepository implements ICircuitoContableRepository { async findAll() { return await this.get("circuitoContableBean"); } }
export class XubioIdentificacionTributariaRepository extends XubioBaseRepository implements IIdentificacionTributariaRepository { async findAll() { return await this.get("identificacionTributaria"); } }

export class XubioMiEmpresaRepository extends XubioBaseRepository implements IMiEmpresaRepository { async findAll() { return await this.get("miempresa"); } }
export class XubioPercepcionRepository extends XubioBaseRepository implements IPercepcionRepository { async findAll() { return await this.get("percepcionBean"); } }
export class XubioRetencionRepository extends XubioBaseRepository implements IRetencionRepository { async findAll() { return await this.get("retencionBean"); } }
export class XubioSucursalRepository extends XubioBaseRepository implements ISucursalRepository { async findAll() { return await this.get("sucursalClienteBean"); } }
export class XubioTransporteRepository extends XubioBaseRepository implements ITransporteRepository { async findAll() { return await this.get("transporteBean"); } }
export class XubioTalonarioRepository extends XubioBaseRepository implements ITalonarioRepository { async findAll() { return await this.get("talonario"); } }
export class XubioUnidadMedidaFinalRepository extends XubioBaseRepository implements IUnidadMedidaFinalRepository { async findAll() { return await this.get("unidadMedida"); } }
export class XubioProductoCompraRepository extends XubioBaseRepository implements IProductoCompraRepository { async findAll() { return await this.get("ProductoCompraBean"); } }
export class XubioRelacionComprobanteRepository extends XubioBaseRepository implements IRelacionComprobanteRepository { async findAll() { return await this.get("relacionFacturaNotaDeCredito"); } }
export class XubioComprobantesAsociadosRepository extends XubioBaseRepository implements IComprobantesAsociadosRepository { async findAll() { return await this.get("comprobantesAsociados"); } }
