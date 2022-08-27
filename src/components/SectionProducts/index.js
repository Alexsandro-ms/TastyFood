import React from "react";

import {
  Container,
  SideLeft,
  ButtonContainer,
  SideRight,
  Content,
} from "./style";
import Pizza from "../../assets/images/pizza_slice.png";
import Button from "../Button";

function SectionProducts() {
  return (
    <Container>
      <SideLeft>
        <Content>
          <h1>Nossos Produtos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quibusdam eaque ad veritatis sed sit nostrum et ullam tempora error.
          </p>
          <ButtonContainer>
            <Button text={"Conhecer"} />
          </ButtonContainer>
        </Content>
      </SideLeft>
      <SideRight>
        <img src={Pizza} />
      </SideRight>
    </Container>
  );
}

export default SectionProducts;
