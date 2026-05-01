import { 
  IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository, IPagoRepository, IBancoRepository, ICuentaContableRepository, 
  IPresupuestoRepository, IRemitoRepository, IVendedorRepository, IPuntoVentaRepository,
  IMonedaRepository, IPaisRepository, IProvinciaRepository, ILocalidadRepository, ITasaIvaRepository, IActividadEconomicaRepository, IUnidadMedidaRepository,
  IAsientoManualRepository, IAjusteStockRepository, ICentroDeCostoRepository, IListaPrecioRepository, ICategoriaCuentaRepository, ICategoriaFiscalRepository, ICircuitoContableRepository, IIdentificacionTributariaRepository,
  IMiEmpresaRepository, IPercepcionRepository, IRetencionRepository, ISucursalRepository, ITransporteRepository, ITalonarioRepository, ITalonarioCobranzaRepository, IUnidadMedidaFinalRepository, IProductoCompraRepository, IRelacionComprobanteRepository, IComprobantesAsociadosRepository, IPDFRepository
} from "../../domain/repositories/IBatchRepositories.js";

// Bloque 1-5 ...
export class GetFacturasCompraUseCase { constructor(private repo: IFacturaCompraRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetOrdenesCompraUseCase { constructor(private repo: IOrdenCompraRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetDepositosUseCase { constructor(private repo: IDepositoRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetPagosUseCase { constructor(private repo: IPagoRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetBancosUseCase { constructor(private repo: IBancoRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetCuentasContablesUseCase { constructor(private repo: ICuentaContableRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetPresupuestosUseCase { constructor(private repo: IPresupuestoRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetRemitosUseCase { constructor(private repo: IRemitoRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetVendedoresUseCase { constructor(private repo: IVendedorRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetPuntosVentaUseCase { constructor(private repo: IPuntoVentaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetMonedasUseCase { constructor(private repo: IMonedaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetPaisesUseCase { constructor(private repo: IPaisRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetProvinciasUseCase { constructor(private repo: IProvinciaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetLocalidadesUseCase { constructor(private repo: ILocalidadRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetTasasIvaUseCase { constructor(private repo: ITasaIvaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetActividadesEconomicasUseCase { constructor(private repo: IActividadEconomicaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetUnidadesMedidaUseCase { constructor(private repo: IUnidadMedidaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetAsientosManualesUseCase { constructor(private repo: IAsientoManualRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetAjustesStockUseCase { constructor(private repo: IAjusteStockRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetCentrosDeCostoUseCase { constructor(private repo: ICentroDeCostoRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetListasPrecioUseCase { constructor(private repo: IListaPrecioRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetCategoriasCuentaUseCase { constructor(private repo: ICategoriaCuentaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetCategoriasFiscalesUseCase { constructor(private repo: ICategoriaFiscalRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetCircuitosContablesUseCase { constructor(private repo: ICircuitoContableRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetIdentificacionesTributariasUseCase { constructor(private repo: IIdentificacionTributariaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }

// Bloque 6
export class GetMiEmpresaUseCase { constructor(private repo: IMiEmpresaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetPercepcionesUseCase { constructor(private repo: IPercepcionRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetRetencionesUseCase { constructor(private repo: IRetencionRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetSucursalesUseCase { constructor(private repo: ISucursalRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetTransportesUseCase { constructor(private repo: ITransporteRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetTalonariosUseCase { constructor(private repo: ITalonarioRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetTalonariosCobranzaUseCase { constructor(private repo: ITalonarioCobranzaRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetUnidadesMedidaFinalUseCase { constructor(private repo: IUnidadMedidaFinalRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetProductosCompraUseCase { constructor(private repo: IProductoCompraRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetRelacionComprobantesUseCase { constructor(private repo: IRelacionComprobanteRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetComprobantesAsociadosUseCase { constructor(private repo: IComprobantesAsociadosRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
export class GetPDFUseCase { constructor(private repo: IPDFRepository) {} async execute(params?: any) { return await this.repo.findAll(params); } }
