import { Stock } from "../entities/Stock.js";

export interface IStockRepository {
  findAll(params?: any): Promise<Stock[]>;
  findById(id: number | string): Promise<any>;
}
