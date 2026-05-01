import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { IClienteRepository } from "../../domain/repositories/IClienteRepository.js";
import { Cliente } from "../../domain/entities/Cliente.js";

export class XubioClienteRepository extends XubioBaseRepository implements IClienteRepository {
  async findAll(params?: any): Promise<Cliente[]> {
    return await this.get("clienteBean", params);
  }
  async findById(id: number | string) {
    return await this.getById("clienteBean", id);
  }
}
