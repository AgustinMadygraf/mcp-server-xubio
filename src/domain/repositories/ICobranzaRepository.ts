import { Cobranza } from "../entities/Cobranza.js";

export interface ICobranzaRepository {
  findAll(params?: any): Promise<Cobranza[]>;
  findById(id: number | string): Promise<any>;
}
