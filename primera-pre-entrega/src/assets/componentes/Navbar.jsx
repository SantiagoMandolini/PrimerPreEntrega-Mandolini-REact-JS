import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../img/Logotipo.webp'; // Asegúrate de ajustar la ruta de la imagen según la estructura de tu proyecto

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler btn-green"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link btn-green" href="./pages/Ofertas.html">Ofertas</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle btn-green" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu btn-green" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/telefonos">Teléfonos</Link></li>
                <li><Link className="dropdown-item" to="/consolas">Consolas</Link></li>
                <li><Link className="dropdown-item" to="/juegos">Juegos</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
