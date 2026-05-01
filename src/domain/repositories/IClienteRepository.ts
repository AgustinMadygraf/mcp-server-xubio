import { Cliente } from "../entities/Cliente.js";

export interface IClienteRepository {
  /**
   * Obtiene la lista de clientes (Solo lectura - GET)
   */
  findAll(): Promise<Cliente[]>;
}
