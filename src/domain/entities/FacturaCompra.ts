export interface FacturaCompra {
  transaccionId: number;
  proveedor: string;
  numero: string;
  fecha: string;
  importeTotal: number;
  moneda: string;
  estado?: string;
}
