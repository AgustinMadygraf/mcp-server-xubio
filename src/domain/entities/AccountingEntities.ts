export interface AsientoManual { transaccionId: number; fecha: string; concepto: string; total?: number; }
export interface AjusteStock { transaccionId: number; fecha: string; observacion?: string; }
export interface CentroDeCosto { ID: number; nombre: string; codigo: string; }
export interface ListaPrecio { listaPrecioId: number; nombre: string; activa: boolean; }
export interface CategoriaCuenta { ID: number; nombre: string; }
export interface CategoriaFiscal { ID: number; nombre: string; }
export interface CircuitoContable { ID: number; nombre: string; }
export interface IdentificacionTributaria { ID: number; nombre: string; }
