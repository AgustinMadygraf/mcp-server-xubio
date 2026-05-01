import { Proveedor } from "../entities/Proveedor.js"; export interface IProveedorRepository { findAll(): Promise<Proveedor[]>; }
