import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { ICobranzaRepository } from "../../domain/repositories/ICobranzaRepository.js";
import { Cobranza } from "../../domain/entities/Cobranza.js";

export class XubioCobranzaRepository extends XubioBaseRepository implements ICobranzaRepository {
  async findAll(params?: any): Promise<Cobranza[]> {
    return await this.get("cobranzaBean", params);
  }
}
