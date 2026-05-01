export interface Cliente {
  id?: string;
  nombre: string;
  email?: string;
  [key: string]: any; // Allow for other fields from Xubio
}
