import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { IStockRepository } from "../../domain/repositories/IStockRepository.js";
import { Stock } from "../../domain/entities/Stock.js";

export class XubioStockRepository extends XubioBaseRepository implements IStockRepository {
  async findAll(params?: any): Promise<Stock[]> {
    const data = await this.get("productoStock", params);
    // El endpoint de stock está paginado por defecto en Xubio
    return data.registros || [];
  }

  async findById(id: number | string): Promise<any> {
    return await this.getById("productoStock", id);
  }
}
