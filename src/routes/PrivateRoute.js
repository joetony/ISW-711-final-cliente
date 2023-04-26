import React from 'react';
import { Navigate,Route } from 'react-router-dom';
import { isAdmin, isLogin } from '../utils/auth';
import { Index,Login,Categories } from './Paths';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = isAdmin();
 
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to={Login} />}
    />
  );
}