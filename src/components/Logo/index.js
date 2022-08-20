import React from "react";
import { Link } from "react-router-dom";

import LogoImg from "../../assets/images/logo.svg";
import { Img } from "./style";

function Logo() {
  return (
    <Img>
      <img src={LogoImg} title={"hamburguer"} alt={"logo hamburguer"} />
      <span>Tasty</span>
    </Img>
  );
}

export default Logo;
