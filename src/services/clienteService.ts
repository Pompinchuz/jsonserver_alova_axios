import { createRequest } from 'alova';

const API_URL = 'http://localhost:5000/clientes';

export const getClientes = createRequest<Cliente[]>(API_URL);


interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
}
