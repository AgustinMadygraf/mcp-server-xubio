import { FacturaCompra } from "../entities/FacturaCompra.js";
import { OrdenCompra } from "../entities/OrdenCompra.js";
import { Deposito } from "../entities/Deposito.js";

export interface IFacturaCompraRepository { findAll(): Promise<FacturaCompra[]>; }
export interface IOrdenCompraRepository { findAll(): Promise<OrdenCompra[]>; }
export interface IDepositoRepository { findAll(): Promise<Deposito[]>; }
