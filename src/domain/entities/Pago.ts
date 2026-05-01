export interface Pago {
  transaccionId: number;
  proveedor: string;
  numero: string;
  fecha: string;
  importe: number;
  moneda: string;
  observaciones?: string;
}
