import { 
  IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository, IPagoRepository, IBancoRepository, ICuentaContableRepository, 
  IPresupuestoRepository, IRemitoRepository, IVendedorRepository, IPuntoVentaRepository,
  IMonedaRepository, IPaisRepository, IProvinciaRepository, ILocalidadRepository, ITasaIvaRepository, IActividadEconomicaRepository, IUnidadMedidaRepository
} from "../../domain/repositories/IBatchRepositories.js";

export class GetFacturasCompraUseCase {
  constructor(private repo: IFacturaCompraRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetOrdenesCompraUseCase {
  constructor(private repo: IOrdenCompraRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetDepositosUseCase {
  constructor(private repo: IDepositoRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetPagosUseCase {
  constructor(private repo: IPagoRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetBancosUseCase {
  constructor(private repo: IBancoRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetCuentasContablesUseCase {
  constructor(private repo: ICuentaContableRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetPresupuestosUseCase {
  constructor(private repo: IPresupuestoRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetRemitosUseCase {
  constructor(private repo: IRemitoRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetVendedoresUseCase {
  constructor(private repo: IVendedorRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetPuntosVentaUseCase {
  constructor(private repo: IPuntoVentaRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetMonedasUseCase {
  constructor(private repo: IMonedaRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetPaisesUseCase {
  constructor(private repo: IPaisRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetProvinciasUseCase {
  constructor(private repo: IProvinciaRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetLocalidadesUseCase {
  constructor(private repo: ILocalidadRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetTasasIvaUseCase {
  constructor(private repo: ITasaIvaRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetActividadesEconomicasUseCase {
  constructor(private repo: IActividadEconomicaRepository) {}
  async execute() { return await this.repo.findAll(); }
}

export class GetUnidadesMedidaUseCase {
  constructor(private repo: IUnidadMedidaRepository) {}
  async execute() { return await this.repo.findAll(); }
}
