import React, { useContext } from "react";
import { ContextTheme } from "../../contexts/ContextTheme";

import { Container } from "./style";

function NavBar() {
  const { toggleTheme } = useContext(ContextTheme);
  return (
    <Container>
      <button onClick={toggleTheme}>Mudar Tema</button>
    </Container>
  );
}

export default NavBar;
