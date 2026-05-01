export interface Remito {
  transaccionId: number;
  cliente: string;
  numero: string;
  fecha: string;
  deposito?: string;
  estado?: string;
}
