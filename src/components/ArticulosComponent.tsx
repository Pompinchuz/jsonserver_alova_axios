import React, { useState, useEffect } from 'react';
import { getArticulos } from '../services/articuloService';

const ArticulosComponent: React.FC = () => {
  const [articulos, setArticulos] = useState<Articulo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const data = await getArticulos();
        setArticulos(data);
      } catch (error) {
        console.error('Error al cargar los artículos', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticulos();
  }, []);

  if (loading) {
    return <div>Cargando artículos...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {articulos.map((articulo) => (
          <tr key={articulo.id}>
            <td>{articulo.id}</td>
            <td>{articulo.nombre}</td>
            <td>{articulo.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticulosComponent;

interface Articulo {
  id: number;
  nombre: string;
  precio: number;
}
