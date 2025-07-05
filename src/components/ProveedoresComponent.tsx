import React, { useState, useEffect } from 'react';
import { getProveedores } from '../services/proveedorService';

const ProveedoresComponent: React.FC = () => {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const data = await getProveedores();
        setProveedores(data);
      } catch (error) {
        console.error('Error al cargar los proveedores', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProveedores();
  }, []);

  if (loading) {
    return <div>Cargando proveedores...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Dirección</th>
        </tr>
      </thead>
      <tbody>
        {proveedores.map((proveedor) => (
          <tr key={proveedor.id}>
            <td>{proveedor.id}</td>
            <td>{proveedor.nombre}</td>
            <td>{proveedor.direccion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProveedoresComponent;

interface Proveedor {
  id: number;
  nombre: string;
  direccion: string;
}
