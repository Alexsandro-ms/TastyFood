import React from "react";

import Logo from "../Logo";
import NavBar from "../NavBar";
import ThemeButton from "../ThemeButton";
import { Container, ContainerMenu, Content } from "./style";

function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <ContainerMenu>
          <NavBar />
          <ThemeButton />
        </ContainerMenu>
      </Content>
    </Container>
  );
}

export default Header;
