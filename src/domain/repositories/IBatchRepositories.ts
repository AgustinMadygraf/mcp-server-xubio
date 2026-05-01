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

export interface IFacturaCompraRepository { findAll(params?: any): Promise<FacturaCompra[]>; }
  findById(id: number | string): Promise<any>;
export interface IOrdenCompraRepository { findAll(params?: any): Promise<OrdenCompra[]>; }
  findById(id: number | string): Promise<any>;
export interface IDepositoRepository { findAll(params?: any): Promise<Deposito[]>; }
  findById(id: number | string): Promise<any>;
export interface IPagoRepository { findAll(params?: any): Promise<Pago[]>; }
  findById(id: number | string): Promise<any>;
export interface IBancoRepository { findAll(params?: any): Promise<Banco[]>; }
  findById(id: number | string): Promise<any>;
export interface ICuentaContableRepository { findAll(params?: any): Promise<CuentaContable[]>; }
  findById(id: number | string): Promise<any>;
export interface IPresupuestoRepository { findAll(params?: any): Promise<Presupuesto[]>; }
  findById(id: number | string): Promise<any>;
export interface IRemitoRepository { findAll(params?: any): Promise<Remito[]>; }
  findById(id: number | string): Promise<any>;
export interface IVendedorRepository { findAll(params?: any): Promise<Vendedor[]>; }
  findById(id: number | string): Promise<any>;
export interface IPuntoVentaRepository { findAll(params?: any): Promise<PuntoVenta[]>; }
  findById(id: number | string): Promise<any>;
export interface IMonedaRepository { findAll(params?: any): Promise<Moneda[]>; }
  findById(id: number | string): Promise<any>;
export interface IPaisRepository { findAll(params?: any): Promise<Pais[]>; }
  findById(id: number | string): Promise<any>;
export interface IProvinciaRepository { findAll(params?: any): Promise<Provincia[]>; }
  findById(id: number | string): Promise<any>;
export interface ILocalidadRepository { findAll(params?: any): Promise<Localidad[]>; }
  findById(id: number | string): Promise<any>;
export interface ITasaIvaRepository { findAll(params?: any): Promise<TasaIva[]>; }
  findById(id: number | string): Promise<any>;
export interface IActividadEconomicaRepository { findAll(params?: any): Promise<ActividadEconomica[]>; }
  findById(id: number | string): Promise<any>;
export interface IUnidadMedidaRepository { findAll(params?: any): Promise<UnidadMedida[]>; }
  findById(id: number | string): Promise<any>;

export interface IAsientoManualRepository { findAll(params?: any): Promise<AsientoManual[]>; }
  findById(id: number | string): Promise<any>;
export interface IAjusteStockRepository { findAll(params?: any): Promise<AjusteStock[]>; }
  findById(id: number | string): Promise<any>;
export interface ICentroDeCostoRepository { findAll(params?: any): Promise<CentroDeCosto[]>; }
  findById(id: number | string): Promise<any>;
export interface IListaPrecioRepository { findAll(params?: any): Promise<ListaPrecio[]>; }
  findById(id: number | string): Promise<any>;
export interface ICategoriaCuentaRepository { findAll(params?: any): Promise<CategoriaCuenta[]>; }
  findById(id: number | string): Promise<any>;
export interface ICategoriaFiscalRepository { findAll(params?: any): Promise<CategoriaFiscal[]>; }
  findById(id: number | string): Promise<any>;
export interface ICircuitoContableRepository { findAll(params?: any): Promise<CircuitoContable[]>; }
  findById(id: number | string): Promise<any>;
export interface IIdentificacionTributariaRepository { findAll(params?: any): Promise<IdentificacionTributaria[]>; }
  findById(id: number | string): Promise<any>;

export interface IMiEmpresaRepository { findAll(params?: any): Promise<MiEmpresa[]>; }
  findById(id: number | string): Promise<any>;
export interface IPercepcionRepository { findAll(params?: any): Promise<Percepcion[]>; }
  findById(id: number | string): Promise<any>;
export interface IRetencionRepository { findAll(params?: any): Promise<Retencion[]>; }
  findById(id: number | string): Promise<any>;
export interface ISucursalRepository { findAll(params?: any): Promise<Sucursal[]>; }
  findById(id: number | string): Promise<any>;
export interface ITransporteRepository { findAll(params?: any): Promise<Transporte[]>; }
  findById(id: number | string): Promise<any>;
export interface ITalonarioRepository { findAll(params?: any): Promise<Talonario[]>; }
  findById(id: number | string): Promise<any>;
export interface ITalonarioCobranzaRepository { findAll(params?: any): Promise<Talonario[]>; }
  findById(id: number | string): Promise<any>;
export interface IUnidadMedidaFinalRepository { findAll(params?: any): Promise<UnidadMedidaFinal[]>; }
  findById(id: number | string): Promise<any>;
export interface IProductoCompraRepository { findAll(params?: any): Promise<ProductoCompra[]>; }
  findById(id: number | string): Promise<any>;
export interface IRelacionComprobanteRepository { findAll(params?: any): Promise<RelacionComprobante[]>; }
  findById(id: number | string): Promise<any>;
export interface IComprobantesAsociadosRepository { findAll(params?: any): Promise<any[]>; }
  findById(id: number | string): Promise<any>;
export interface IPDFRepository { findAll(params?: any): Promise<any>; }
  findById(id: number | string): Promise<any>;
