import React from 'react';
import Header from './Header';
import Productos from './ListaDeProductos';
import FiltroPorCategoria from './FiltroPorCategoria'; 
import Footer from './Footer';

const Juegos = () => {

  const categoriasAMostrar = ['Juego'];

  return (
    <div>
      <Header />
      <FiltroPorCategoria productos={Productos} categoriasAMostrar={categoriasAMostrar} /> 
      <Footer />
    </div>
  );
}

export default Juegos;
