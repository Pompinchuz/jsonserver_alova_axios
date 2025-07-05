import axios from 'axios';

const API_URL = 'http://localhost:5000/proveedores';

export const getProveedores = async (): Promise<Proveedor[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

interface Proveedor {
  id: number;
  nombre: string;
  direccion: string;
}
