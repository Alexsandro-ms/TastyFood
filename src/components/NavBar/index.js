import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./style";

function NavBar() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/">Cardapio</NavLink>
        </li>
        <li>
          <NavLink to="/">Novo</NavLink>
        </li>
        <li>
          <NavLink to="/">Suporte</NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
