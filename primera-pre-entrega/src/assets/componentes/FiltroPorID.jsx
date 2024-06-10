import React from 'react';
import ProductCard from './ProductCard';
import Productos from './ListaDeProductos'; 
const FiltroPorID = ({ productos, idsAMostrar }) => {
  const filtrarProductosPorID = (idsAMostrar) => {
    return productos.filter(producto => idsAMostrar.includes(producto.id));
  }

  const productosFiltrados = filtrarProductosPorID(idsAMostrar);

  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          {productosFiltrados.map(producto => (
            <div className="col-lg-4 col-md-6" key={producto.id} data-aos="fade-up fade-down">
              <ProductCard producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FiltroPorID;