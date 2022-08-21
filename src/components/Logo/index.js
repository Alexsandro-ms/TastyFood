import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Img } from "./style";
import { FaHamburger } from "react-icons/fa";

function Logo() {
  const [mode, setMode] = useState([]);
  return (
    <Img>
      <FaHamburger />
      <span>Tasty</span>
    </Img>
  );
}

export default Logo;
