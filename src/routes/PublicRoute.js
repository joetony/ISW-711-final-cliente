import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { isAdmin } from '../utils/auth';
import { Index, Login } from './Paths'; 
/*
export default function PublicRoute({ path, ...rest }) {
  const { isAuthenticated } = isLogin();

  return (
    <Route {...rest} path={path} element={isAuthenticated ? <Navigate to={Index} /> : <Navigate to={Login} />} />
  );
}*/

export default function PublicRoute({ component: Component, ...rest }) {
  const isAuthenticated = isAdmin();
  return (
    <Route
      {...rest}
      element={!isAuthenticated ? <Component /> : <Navigate to={Index} />}
    />
  );
}