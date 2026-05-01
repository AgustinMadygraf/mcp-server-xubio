import { IClienteRepository } from "../../domain/repositories/IClienteRepository.js";
import { IProductoRepository } from "../../domain/repositories/IProductoRepository.js";
import { IFacturaRepository } from "../../domain/repositories/IFacturaRepository.js";
import { IProveedorRepository } from "../../domain/repositories/IProveedorRepository.js";
import { IStockRepository } from "../../domain/repositories/IStockRepository.js";
import { 
  IFacturaCompraRepository, IOrdenCompraRepository, IPresupuestoRepository, 
  IAsientoManualRepository, IAjusteStockRepository, IListaPrecioRepository, ICuentaContableRepository
} from "../../domain/repositories/IBatchRepositories.js";

export class GetClienteByIdUseCase { constructor(private repository: IClienteRepository) {} async execute(id: number) { return await this.repository.findById(id); } }
export class GetProductoByIdUseCase { constructor(private repository: IProductoRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetFacturaByIdUseCase { constructor(private repository: IFacturaRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetProveedorByIdUseCase { constructor(private repository: IProveedorRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetStockByProductoIdUseCase { constructor(private repository: IStockRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }

export class GetFacturaCompraByIdUseCase { constructor(private repository: IFacturaCompraRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetOrdenCompraByIdUseCase { constructor(private repository: IOrdenCompraRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetPresupuestoByIdUseCase { constructor(private repository: IPresupuestoRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetAsientoManualByIdUseCase { constructor(private repository: IAsientoManualRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetAjusteStockByIdUseCase { constructor(private repository: IAjusteStockRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetListaPrecioByIdUseCase { constructor(private repository: IListaPrecioRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
export class GetCuentaContableByIdUseCase { constructor(private repository: ICuentaContableRepository) {} async execute(id: number | string) { return await this.repository.findById(id); } }
