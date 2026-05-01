import { Proveedor } from "../entities/Proveedor.js"; export interface IProveedorRepository { findAll(params?: any): Promise<Proveedor[]>; }
  findById(id: number | string): Promise<any>;
