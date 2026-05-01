import { Factura } from "../entities/Factura.js"; export interface IFacturaRepository { findAll(params?: any): Promise<Factura[]>; }
  findById(id: number | string): Promise<any>;
