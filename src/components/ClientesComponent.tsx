import React, { useState, useEffect } from 'react';
import { getClientes } from '../services/clienteService';

const ClientesComponent: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await getClientes();
        setClientes(data);
      } catch (error) {
        console.error('Error al cargar los clientes', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  if (loading) {
    return <div>Cargando clientes...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nombre}</td>
            <td>{cliente.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientesComponent;

interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
}
