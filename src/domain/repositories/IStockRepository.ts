import { Stock } from "../entities/Stock.js";

export interface IStockRepository {
  findAll(): Promise<Stock[]>;
}
