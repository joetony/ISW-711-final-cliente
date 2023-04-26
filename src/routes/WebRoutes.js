import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Form';
import Index from '../pages/Index';
import Categories from '../pages/Categories';
import Source from '../pages/NewSource';
import News from '../pages/News';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/sources" element={<Source />} />
        <Route path="/news"element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;
