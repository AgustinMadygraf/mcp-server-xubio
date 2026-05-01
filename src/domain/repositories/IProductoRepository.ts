import { Producto } from "../entities/Producto.js"; export interface IProductoRepository { findAll(params?: any): Promise<Producto[]>; }
  findById(id: number | string): Promise<any>;
