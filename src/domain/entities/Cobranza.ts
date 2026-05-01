export interface Cobranza {
  transaccionId: number;
  cliente: string;
  numero: string;
  fecha: string;
  importe: number;
  moneda: string;
  cotizacion: number;
  observaciones?: string;
  estado?: string;
}
