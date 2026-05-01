import { IClienteRepository } from "../../domain/repositories/IClienteRepository.js";
import { Cliente } from "../../domain/entities/Cliente.js";

export class GetClientesUseCase {
  constructor(private clienteRepository: IClienteRepository) {}

  async execute(): Promise<Cliente[]> {
    return await this.clienteRepository.findAll();
  }
}
