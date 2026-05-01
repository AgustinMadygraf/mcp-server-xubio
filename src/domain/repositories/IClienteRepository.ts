import { Cliente } from "../entities/Cliente.js";

export interface IClienteRepository {
  /**
   * Obtiene la lista de clientes (Solo lectura - GET)
   */
  findAll(params?: any): Promise<Cliente[]>;
  findById(id: number | string): Promise<any>;
  findById(id: number): Promise<Cliente>;
}
