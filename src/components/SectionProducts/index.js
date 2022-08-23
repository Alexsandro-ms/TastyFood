import React from "react";

import { Container, SideLeft, SideRight } from "./style";
import Button from "../Button";
import Pizza from "../../assets/images/pizza_slice.png";

function SectionProducts() {
  return (
    <Container>
      <SideLeft>
        <div>
          <h1>Nossos Produtos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quibusdam eaque ad veritatis sed sit nostrum et ullam tempora error.
          </p>
          <Button text={"Conhecer"} />
        </div>
      </SideLeft>
      <SideRight>
        <img src={Pizza} />
      </SideRight>
    </Container>
  );
}

export default SectionProducts;
