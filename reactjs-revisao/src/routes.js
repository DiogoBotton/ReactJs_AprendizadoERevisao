import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id/:param" element={<Profile />} />

            {/* Caso página não encontrada */}
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}