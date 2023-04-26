import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { isAdmin } from "../utils/auth";


class NavBar extends Component {

  logout = () => {
    localStorage.removeItem('token');
    window.location.href = "/";//return to login screen
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/index">My Cover</Link>
  
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isAdmin() && (
                  <li className="nav-item">
                    <Link className="nav-link custom-link-color" to="/categories">Categorías</Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link custom-link-color" to="/sources">Recursos</Link>
                </li>
              </ul>
              <button type="button" className="btn btn-primary custom-button-color me-3" onClick={this.logout}>
                Cerrar Sesión
              </button>
            </div>
          </div>
        </nav>
      )
  }
}

export default NavBar;