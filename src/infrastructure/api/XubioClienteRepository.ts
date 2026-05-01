import { XubioBaseRepository } from "./XubioBaseRepository.js";
import { IClienteRepository } from "../../domain/repositories/IClienteRepository.js";
import { Cliente } from "../../domain/entities/Cliente.js";

export class XubioClienteRepository extends XubioBaseRepository implements IClienteRepository {
  async findAll(): Promise<Cliente[]> {
    return await this.get("clienteBean");
  }
}
