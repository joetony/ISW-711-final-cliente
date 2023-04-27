import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from '../utils/authContext';

function NavBar() {

  const { logout,isAdmin } = useAuthContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/index">My Cover</Link>
  
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {isAdmin && (
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categorías</Link>
            </li>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/sources">Recursos</Link>
          </li>
        </ul>
        <button type="button" className="btn btn-primary me-3" onClick={logout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  </nav>
  )

}

export default NavBar;