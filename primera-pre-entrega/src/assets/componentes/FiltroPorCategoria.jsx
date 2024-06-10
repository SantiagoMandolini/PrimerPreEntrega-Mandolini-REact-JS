import React from 'react';
import ProductCard from './ProductCard';
import Productos from './ListaDeProductos';

const FiltroPorCategoria = ({ productos, categoriasAMostrar }) => {
  const filtrarProductosPorCategoria = (categoriasAMostrar) => {
    return productos.filter(producto => categoriasAMostrar.includes(producto.categoria));
  }

  const productosFiltrados = filtrarProductosPorCategoria(categoriasAMostrar);

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

export default FiltroPorCategoria;