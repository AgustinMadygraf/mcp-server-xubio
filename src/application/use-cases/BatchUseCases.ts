import { IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository } from "../../domain/repositories/IBatchRepositories.js";

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
