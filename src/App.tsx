import React from 'react';
import ProveedoresComponent from './components/ProveedoresComponent';
import ArticulosComponent from './components/ArticulosComponent';
import ClientesComponent from './components/ClientesComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>Proveedores</h1>
      <ProveedoresComponent />
      <h1>Artículos</h1>
      <ArticulosComponent />
      <h1>Clientes</h1>
      <ClientesComponent />
    </div>
  );
};

export default App;
