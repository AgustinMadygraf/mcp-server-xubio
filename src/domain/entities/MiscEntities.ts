export interface MiEmpresa { nombre: string; cuit: string; direccion?: string; }
export interface Percepcion { ID: number; nombre: string; porcentaje: number; }
export interface Retencion { ID: number; nombre: string; porcentaje: number; }
export interface Sucursal { sucursalId: number; nombre: string; }
export interface Transporte { transporteId: number; nombre: string; }
export interface Talonario { tipoComprobante: string; letraComprobante: string; }
export interface UnidadMedidaFinal { ID: number; nombre: string; codigo: string; }
export interface ProductoCompra { productoid: number; nombre: string; codigo: string; }
export interface RelacionComprobante { idFactura: number; idNotaDeCredito: number; }
