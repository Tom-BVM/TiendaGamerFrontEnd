import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/LEVELUPGAMERNAVBAR.png";
import IconUser from "../assets/img/icons8-usuario-30.png";
import IconCart from "../assets/img/icons8-carrito-de-compras-48.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={Logo} alt="Level-Up Gamer" width="100px" />
        </Link>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSimple"
          aria-controls="navbarSimple"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSimple">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* Submenú Catálogo */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="submenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catálogo
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="submenu">
                <li><Link className="dropdown-item" to="/gamer">Gaming</Link></li>
                <li><Link className="dropdown-item" to="/computacion">Computación</Link></li>
                <li><Link className="dropdown-item" to="/accesorios">Accesorios</Link></li>
                <li><Link className="dropdown-item" to="/peryser">Personalizados & Servicios</Link></li>
              </ul>
            </li>

            {/* Iconos de usuario y carrito */}
            <li className="ms-3">
              <Link to="/auth">
                <img src={IconUser} alt="Login" width="30px" />
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/carrito">
                <img src={IconCart} alt="Carrito" width="30px" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
