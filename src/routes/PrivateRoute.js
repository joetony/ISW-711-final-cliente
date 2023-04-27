import React from 'react';
import { Navigate,Route,Outlet } from 'react-router-dom';
import { isAdmin, isLogin } from '../utils/auth';
import { Index,Login,Categories } from './Paths';
import { useAuthContext } from '../utils/authContext';


export default function PrivateRoute() {
  const {isAuthenticated,isAdmin} = useAuthContext();
  
  if (!isAuthenticated) {
    
      return <Navigate to={Login} />;
   
   
  }
  if(isAdmin){
    return <Navigate to={Categories} />;
  }
  
  return (
    <div>
      <Outlet />
    </div>
  );
}