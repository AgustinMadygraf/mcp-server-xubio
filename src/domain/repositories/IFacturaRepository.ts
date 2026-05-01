import { Factura } from "../entities/Factura.js"; export interface IFacturaRepository { findAll(): Promise<Factura[]>; }
