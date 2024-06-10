import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    
    const isHomePage = () => {
        return location.pathname === '/';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="./img/Logotipo.webp" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                       
                        {!isHomePage() && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/ofertas">Ofertas</Link>
                            </li>
                        )}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                
                                {!isHomePage() && (
                                    <>
                                        <li><Link className="dropdown-item" to="/telefonos">Teléfonos</Link></li>
                                        <li><Link className="dropdown-item" to="/consolas">Consolas</Link></li>
                                        <li><Link className="dropdown-item" to="/juegos">Juegos</Link></li>
                                    </>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
