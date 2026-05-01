import { 
  IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository, IPagoRepository, IBancoRepository, ICuentaContableRepository, 
  IPresupuestoRepository, IRemitoRepository, IVendedorRepository, IPuntoVentaRepository,
  IMonedaRepository, IPaisRepository, IProvinciaRepository, ILocalidadRepository, ITasaIvaRepository, IActividadEconomicaRepository, IUnidadMedidaRepository,
  IAsientoManualRepository, IAjusteStockRepository, ICentroDeCostoRepository, IListaPrecioRepository, ICategoriaCuentaRepository, ICategoriaFiscalRepository, ICircuitoContableRepository, IIdentificacionTributariaRepository,
  IMiEmpresaRepository, IPercepcionRepository, IRetencionRepository, ISucursalRepository, ITransporteRepository, ITalonarioRepository, IUnidadMedidaFinalRepository, IProductoCompraRepository, IRelacionComprobanteRepository, IComprobantesAsociadosRepository
} from "../../domain/repositories/IBatchRepositories.js";

// Bloque 1-5 ...
export class GetFacturasCompraUseCase { constructor(private repo: IFacturaCompraRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetOrdenesCompraUseCase { constructor(private repo: IOrdenCompraRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetDepositosUseCase { constructor(private repo: IDepositoRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetPagosUseCase { constructor(private repo: IPagoRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetBancosUseCase { constructor(private repo: IBancoRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetCuentasContablesUseCase { constructor(private repo: ICuentaContableRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetPresupuestosUseCase { constructor(private repo: IPresupuestoRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetRemitosUseCase { constructor(private repo: IRemitoRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetVendedoresUseCase { constructor(private repo: IVendedorRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetPuntosVentaUseCase { constructor(private repo: IPuntoVentaRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetMonedasUseCase { constructor(private repo: IMonedaRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetPaisesUseCase { constructor(private repo: IPaisRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetProvinciasUseCase { constructor(private repo: IProvinciaRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetLocalidadesUseCase { constructor(private repo: ILocalidadRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetTasasIvaUseCase { constructor(private repo: ITasaIvaRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetActividadesEconomicasUseCase { constructor(private repo: IActividadEconomicaRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetUnidadesMedidaUseCase { constructor(private repo: IUnidadMedidaRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetAsientosManualesUseCase { constructor(private repo: IAsientoManualRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetAjustesStockUseCase { constructor(private repo: IAjusteStockRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetCentrosDeCostoUseCase { constructor(private repo: ICentroDeCostoRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetListasPrecioUseCase { constructor(private repo: IListaPrecioRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetCategoriasCuentaUseCase { constructor(private repo: ICategoriaCuentaRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetCategoriasFiscalesUseCase { constructor(private repo: ICategoriaFiscalRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetCircuitosContablesUseCase { constructor(private repo: ICircuitoContableRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetIdentificacionesTributariasUseCase { constructor(private repo: IIdentificacionTributariaRepository) {} async execute() { return await this.repo.findAll(); } }

// Bloque 6
export class GetMiEmpresaUseCase { constructor(private repo: IMiEmpresaRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetPercepcionesUseCase { constructor(private repo: IPercepcionRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetRetencionesUseCase { constructor(private repo: IRetencionRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetSucursalesUseCase { constructor(private repo: ISucursalRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetTransportesUseCase { constructor(private repo: ITransporteRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetTalonariosUseCase { constructor(private repo: ITalonarioRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetUnidadesMedidaFinalUseCase { constructor(private repo: IUnidadMedidaFinalRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetProductosCompraUseCase { constructor(private repo: IProductoCompraRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetRelacionComprobantesUseCase { constructor(private repo: IRelacionComprobanteRepository) {} async execute() { return await this.repo.findAll(); } }
export class GetComprobantesAsociadosUseCase { constructor(private repo: IComprobantesAsociadosRepository) {} async execute() { return await this.repo.findAll(); } }
