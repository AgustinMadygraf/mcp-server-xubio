export interface Stock {
  nombre: string;
  stock: number;
  activo: boolean;
}

export interface StockPaginado {
  registros: Stock[];
  totalDeRegistros: number;
}
