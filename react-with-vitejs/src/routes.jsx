import React from "react";
import {Routes, Route} from 'react-router-dom';

// Pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />

            {/* Caso página não encontrada */}
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}