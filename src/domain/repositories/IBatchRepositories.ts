import { FacturaCompra } from "../entities/FacturaCompra.js";
import { OrdenCompra } from "../entities/OrdenCompra.js";
import { Deposito } from "../entities/Deposito.js";
import { Pago } from "../entities/Pago.js";
import { Banco } from "../entities/Banco.js";
import { CuentaContable } from "../entities/CuentaContable.js";
import { Presupuesto } from "../entities/Presupuesto.js";
import { Remito } from "../entities/Remito.js";
import { Vendedor } from "../entities/Vendedor.js";
import { PuntoVenta } from "../entities/PuntoVenta.js";
import { Moneda, Pais, Provincia, Localidad, TasaIva, ActividadEconomica, UnidadMedida } from "../entities/ConfigEntities.js";
import { AsientoManual, AjusteStock, CentroDeCosto, ListaPrecio, CategoriaCuenta, CategoriaFiscal, CircuitoContable, IdentificacionTributaria } from "../entities/AccountingEntities.js";
import { MiEmpresa, Percepcion, Retencion, Sucursal, Transporte, Talonario, UnidadMedidaFinal, ProductoCompra, RelacionComprobante } from "../entities/MiscEntities.js";

export interface IFacturaCompraRepository { findAll(): Promise<FacturaCompra[]>; }
export interface IOrdenCompraRepository { findAll(): Promise<OrdenCompra[]>; }
export interface IDepositoRepository { findAll(): Promise<Deposito[]>; }
export interface IPagoRepository { findAll(): Promise<Pago[]>; }
export interface IBancoRepository { findAll(): Promise<Banco[]>; }
export interface ICuentaContableRepository { findAll(): Promise<CuentaContable[]>; }
export interface IPresupuestoRepository { findAll(): Promise<Presupuesto[]>; }
export interface IRemitoRepository { findAll(): Promise<Remito[]>; }
export interface IVendedorRepository { findAll(): Promise<Vendedor[]>; }
export interface IPuntoVentaRepository { findAll(): Promise<PuntoVenta[]>; }
export interface IMonedaRepository { findAll(): Promise<Moneda[]>; }
export interface IPaisRepository { findAll(): Promise<Pais[]>; }
export interface IProvinciaRepository { findAll(): Promise<Provincia[]>; }
export interface ILocalidadRepository { findAll(): Promise<Localidad[]>; }
export interface ITasaIvaRepository { findAll(): Promise<TasaIva[]>; }
export interface IActividadEconomicaRepository { findAll(): Promise<ActividadEconomica[]>; }
export interface IUnidadMedidaRepository { findAll(): Promise<UnidadMedida[]>; }

export interface IAsientoManualRepository { findAll(): Promise<AsientoManual[]>; }
export interface IAjusteStockRepository { findAll(): Promise<AjusteStock[]>; }
export interface ICentroDeCostoRepository { findAll(): Promise<CentroDeCosto[]>; }
export interface IListaPrecioRepository { findAll(): Promise<ListaPrecio[]>; }
export interface ICategoriaCuentaRepository { findAll(): Promise<CategoriaCuenta[]>; }
export interface ICategoriaFiscalRepository { findAll(): Promise<CategoriaFiscal[]>; }
export interface ICircuitoContableRepository { findAll(): Promise<CircuitoContable[]>; }
export interface IIdentificacionTributariaRepository { findAll(): Promise<IdentificacionTributaria[]>; }

export interface IMiEmpresaRepository { findAll(): Promise<MiEmpresa[]>; }
export interface IPercepcionRepository { findAll(): Promise<Percepcion[]>; }
export interface IRetencionRepository { findAll(): Promise<Retencion[]>; }
export interface ISucursalRepository { findAll(): Promise<Sucursal[]>; }
export interface ITransporteRepository { findAll(): Promise<Transporte[]>; }
export interface ITalonarioRepository { findAll(): Promise<Talonario[]>; }
export interface IUnidadMedidaFinalRepository { findAll(): Promise<UnidadMedidaFinal[]>; }
export interface IProductoCompraRepository { findAll(): Promise<ProductoCompra[]>; }
export interface IRelacionComprobanteRepository { findAll(): Promise<RelacionComprobante[]>; }
export interface IComprobantesAsociadosRepository { findAll(): Promise<any[]>; }
