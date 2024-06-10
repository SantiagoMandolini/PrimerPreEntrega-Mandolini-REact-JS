import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Productos from './ListaDeProductos';
import FiltroPorID from './FiltroPorID'; 
import Footer from './Footer';

const Home = () => {
  
  const idsAMostrar = ['SS24', 'CP5', 'MJW', 'RPG8', 'SW', 'P3R'];

  return (
    <div>
      <Header />
      <Carousel />
      <FiltroPorID productos={Productos} idsAMostrar={idsAMostrar} />
      <Footer />
    </div>
  );
}

export default Home;