import React, { useContext } from "react";
import { ContextTheme } from "../../contexts/ContextTheme";
import * as IconsVs from "react-icons/vsc";
import { Button } from "./style";

function ThemeButton() {
  const { toggleTheme } = useContext(ContextTheme);

  return (
    <Button onClick={toggleTheme}>
      <IconsVs.VscColorMode />
    </Button>
  );
}

export default ThemeButton;
