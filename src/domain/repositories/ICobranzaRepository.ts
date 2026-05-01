import { Cobranza } from "../entities/Cobranza.js";

export interface ICobranzaRepository {
  findAll(): Promise<Cobranza[]>;
}
