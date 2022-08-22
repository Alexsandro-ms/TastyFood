import React, { useContext } from "react";
import { ContextTheme } from "../../contexts/ContextTheme";
import { VscColorMode } from "react-icons/vsc";
import { Button } from "./style";

function ThemeButton() {
  const { toggleTheme } = useContext(ContextTheme);

  return (
    <Button onClick={toggleTheme}>
      <VscColorMode title={"Tema"} alt="Mudar tema" />
    </Button>
  );
}

export default ThemeButton;
