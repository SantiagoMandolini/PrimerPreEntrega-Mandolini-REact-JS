import React from 'react';
import Header from './Header';
import Productos from './ListaDeProductos';
import FiltroPorCategoria from './FiltroPorCategoria'; 
import Footer from './Footer';

const Telefonos = () => {

  const categoriasAMostrar = ['Telefono'];

  return (
    <div>
      <Header />
      <FiltroPorCategoria productos={Productos} categoriasAMostrar={categoriasAMostrar} /> 
      <Footer />
    </div>
  );
}

export default Telefonos;
