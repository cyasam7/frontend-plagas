import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/users">
          Menu
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/usuarios">
              Trabajadores
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/clientes">
              Clientes
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Revisiones
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Layout;
