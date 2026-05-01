import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { IFacturaCompraRepository, IOrdenCompraRepository, IDepositoRepository, IPagoRepository, IBancoRepository, ICuentaContableRepository, IPresupuestoRepository, IRemitoRepository, IVendedorRepository, IPuntoVentaRepository } from "../../domain/repositories/IBatchRepositories.js";
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

export class XubioFacturaCompraRepository extends XubioBaseRepository implements IFacturaCompraRepository {
  async findAll(): Promise<FacturaCompra[]> { return await this.get("comprobanteCompraBean"); }
}

export class XubioOrdenCompraRepository extends XubioBaseRepository implements IOrdenCompraRepository {
  async findAll(): Promise<OrdenCompra[]> { return await this.get("ordenCompraBean"); }
}

export class XubioDepositoRepository extends XubioBaseRepository implements IDepositoRepository {
  async findAll(): Promise<Deposito[]> { return await this.get("depositos"); }
}

export class XubioPagoRepository extends XubioBaseRepository implements IPagoRepository {
  async findAll(): Promise<Pago[]> { return await this.get("pagoBean"); }
}

export class XubioBancoRepository extends XubioBaseRepository implements IBancoRepository {
  async findAll(): Promise<Banco[]> { return await this.get("banco"); }
}

export class XubioCuentaContableRepository extends XubioBaseRepository implements ICuentaContableRepository {
  async findAll(): Promise<CuentaContable[]> { return await this.get("cuenta"); }
}

export class XubioPresupuestoRepository extends XubioBaseRepository implements IPresupuestoRepository {
  async findAll(): Promise<Presupuesto[]> { return await this.get("presupuestoBean"); }
}

export class XubioRemitoRepository extends XubioBaseRepository implements IRemitoRepository {
  async findAll(): Promise<Remito[]> { return await this.get("remitoVentaBean"); }
}

export class XubioVendedorRepository extends XubioBaseRepository implements IVendedorRepository {
  async findAll(): Promise<Vendedor[]> { return await this.get("vendedorBean"); }
}

export class XubioPuntoVentaRepository extends XubioBaseRepository implements IPuntoVentaRepository {
  async findAll(): Promise<PuntoVenta[]> { return await this.get("puntoVentaBean"); }
}
