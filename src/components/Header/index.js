// Bibliotecas
import React, { useState } from "react";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

// Components
import Logo from "../Logo";
import NavBar from "../NavBar";
import ThemeButton from "../ThemeButton";
// Estilos
import {
  Container,
  ContainerMenu,
  Content,
  ContainerHamb,
  ElementsMenu,
} from "./style";

function Header() {
  const [menu, setMenu] = useState(false);
  const handleClickToggle = () => setMenu(!menu);
  return (
    <Container>
      <Content>
        <Logo />
        {menu ? (
          <ContainerHamb>
            <NavBar activeMenu={menu} />
            <ElementsMenu>
              <MdOutlineRestaurantMenu
                title={"Fechar Menu"}
                alt={"Talheres Fechar"}
                onClick={handleClickToggle}
              />
            </ElementsMenu>
          </ContainerHamb>
        ) : (
          <ContainerMenu>
            <NavBar activeMenu={menu} />
            <ContainerHamb>
              <BiCoffeeTogo
                title={"Menu"}
                alt={"Menu"}
                onClick={handleClickToggle}
              />
            </ContainerHamb>
            <ThemeButton />
          </ContainerMenu>
        )}
      </Content>
    </Container>
  );
}

export default Header;
