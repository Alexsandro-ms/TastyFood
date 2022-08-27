import React from "react";

import { Container } from "../Home/style";
import Header from "../../components/Header";
import MenuComponent from "../../components/MenuComponent";

function Menu() {
  return (
    <Container>
      <Header />
      <MenuComponent />
    </Container>
  );
}

export default Menu;
