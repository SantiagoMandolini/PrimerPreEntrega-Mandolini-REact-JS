import React from 'react';

const ProductCard = ({ producto }) => {
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up fade-down">
            <div className="card mb-4 producto">
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <h3>{producto.nombre}</h3>
                    <p className="descripcion-producto">{producto.descripcion}</p>
                    <div className="price">
                        <p>{producto.precio}</p>
                        <button>BUY</button>
                    </div>
                </div>
                <div className="product-badge">{producto.categoria}</div>
            </div>
        </div>
    );
}

export default ProductoCard;


