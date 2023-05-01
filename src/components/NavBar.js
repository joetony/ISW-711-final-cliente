import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from '../utils/authContext';

function NavBar() {

  const { logout, isAdmin } = useAuthContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
      <Link className="navbar-brand" to="/index">My Cover</Link>
  

    <div class="container">
   
   <div class="row">
     
     
     <div class="col-sm">
       <button type="button" class="btn btn-primary"><Link className="nav-link" to="/sources">Recursos</Link></button>
     </div>
     {isAdmin && (
      <div class="col-sm">
      <button type="button" className="btn btn-primary"> <Link className="nav-link" to="/categories">Categorías</Link></button>
    </div>
          
             
          
          )}
     
     <div class="col-sm">
       <button type="button" className="btn btn-primary"  onClick={logout}>Cerrar Sesión</button>
     </div>
   </div>
 </div>
  </nav>
  


  )

}

export default NavBar;