import { IStockRepository } from "../../domain/repositories/IStockRepository.js";
import { Stock } from "../../domain/entities/Stock.js";

export class GetStockUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute(): Promise<Stock[]> {
    return await this.stockRepository.findAll();
  }
}
