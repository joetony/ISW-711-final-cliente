import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./utils/authContext";
import Login from './pages/Form';
import Index from './pages/Index';
import Categories from './pages/Categories';
import Source from './pages/NewSource';
import News from './pages/News';
import Register from './pages/Register';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function app() {
    return (
        <AuthContextProvider>
            <div className="app">
                <Router>
                    <Routes>
                        <Route path="/" element={<PublicRoute />}>
                            <Route index element={<Login />} />
                        </Route>
                        <Route path="/register" element={<PublicRoute />}>
                            <Route index element={<Register />} />

                        </Route>
                        <Route path="/index" element={<PrivateRoute />}>
                            <Route index element={<Index />} />

                        </Route>
                        <Route path="/categories" element={<PrivateRoute />}>
                            <Route index element={<Categories />} />

                        </Route>
                        <Route path="/sources" element={<PrivateRoute />}>
                            <Route index element={<Source />} />

                        </Route>

                        <Route path="/news" element={<PrivateRoute />}>
                            <Route index element={<News />} />

                        </Route>


                    </Routes>

                </Router>
            </div>
        </AuthContextProvider>


    );
}

export default app;
