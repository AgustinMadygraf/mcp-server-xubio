import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository } from "../../domain/repositories/IBatchRepositories.js";
import { FacturaCompra } from "../../domain/entities/FacturaCompra.js";
import { OrdenCompra } from "../../domain/entities/OrdenCompra.js";
import { Deposito } from "../../domain/entities/Deposito.js";

export class XubioFacturaCompraRepository extends XubioBaseRepository implements IFacturaCompraRepository {
  async findAll(): Promise<FacturaCompra[]> { return await this.get("comprobanteCompraBean"); }
}

export class XubioOrdenCompraRepository extends XubioBaseRepository implements IOrdenCompraRepository {
  async findAll(): Promise<OrdenCompra[]> { return await this.get("ordenCompraBean"); }
}

export class XubioDepositoRepository extends XubioBaseRepository implements IDepositoRepository {
  async findAll(): Promise<Deposito[]> { return await this.get("depositos"); }
}
