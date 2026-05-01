import { Cliente } from "../entities/Cliente.js";

export interface IClienteRepository {
  findAll(params?: any): Promise<Cliente[]>;
  findById(id: number | string): Promise<any>;
}
