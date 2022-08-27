import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Suport from "../pages/Suport";

// Todas as Rotas do site
function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/suport" element={<Suport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
