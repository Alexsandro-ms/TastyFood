import React from "react";
import { ItemLinks, Nav } from "./style";

function NavBar({ activeMenu }) {
  return (
    <Nav active={activeMenu ? "0" : "-100%"}>
      <ul>
        <li>
          <ItemLinks to="/">Inicio</ItemLinks>
        </li>
        <li>
          <ItemLinks to="/about">Sobre</ItemLinks>
        </li>
        <li>
          <ItemLinks to="/menu">Cardapio</ItemLinks>
        </li>
        <li>
          <ItemLinks to="/suport">Suporte</ItemLinks>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
