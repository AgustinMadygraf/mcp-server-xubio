export interface Presupuesto {
  transaccionId: number;
  cliente: string;
  numero: string;
  fecha: string;
  importeTotal: number;
  estado?: string;
}
