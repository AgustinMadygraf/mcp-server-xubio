import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { IStockRepository } from "../../domain/repositories/IStockRepository.js";
import { Stock } from "../../domain/entities/Stock.js";

export class XubioStockRepository extends XubioBaseRepository implements IStockRepository {
  async findAll(): Promise<Stock[]> {
    const data = await this.get("productoStock");
    // El endpoint de stock está paginado por defecto en Xubio
    return data.registros || [];
  }
}
