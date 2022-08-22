import React from "react";

import { Logo } from "./style";
import { FaHamburger } from "react-icons/fa";

function LogoTipo() {
  return (
    <Logo>
      <FaHamburger />
      <span>Tasty</span>
    </Logo>
  );
}

export default LogoTipo;
