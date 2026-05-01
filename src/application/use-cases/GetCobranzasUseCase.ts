import { ICobranzaRepository } from "../../domain/repositories/ICobranzaRepository.js";
import { Cobranza } from "../../domain/entities/Cobranza.js";

export class GetCobranzasUseCase {
  constructor(private cobranzaRepository: ICobranzaRepository) {}

  async execute(): Promise<Cobranza[]> {
    return await this.cobranzaRepository.findAll();
  }
}
