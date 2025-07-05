import { createRequest } from 'alova';

const API_URL = 'http://localhost:5000/articulos';

// Usamos createRequest para hacer la solicitud HTTP
export const getArticulos = createRequest<Articulo[]>(API_URL);

export interface Articulo {
  id: number;
  nombre: string;
  precio: number;
}
