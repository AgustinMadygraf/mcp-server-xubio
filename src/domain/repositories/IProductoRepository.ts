import { Producto } from "../entities/Producto.js"; export interface IProductoRepository { findAll(): Promise<Producto[]>; }
