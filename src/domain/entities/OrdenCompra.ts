export interface OrdenCompra {
  transaccionId: number;
  proveedor: string;
  numero: string;
  fecha: string;
  importeTotal: number;
  estado?: string;
}
