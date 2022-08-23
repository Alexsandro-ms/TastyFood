import React from "react";
import { ContainerButton } from "./style";

function Button({ text, onClick }) {
  return <ContainerButton onClick={onClick}>{text}</ContainerButton>;
}

export default Button;
