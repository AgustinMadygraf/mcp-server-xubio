import { IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository, IPagoRepository, IBancoRepository, ICuentaContableRepository, IPresupuestoRepository, IRemitoRepository, IVendedorRepository, IPuntoVentaRepository } from "../../domain/repositories/IBatchRepositories.js";

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
