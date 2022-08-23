// Bibliotecas
import React from "react";
import Carousel from "react-elastic-carousel";

// Components
import { Container, Item, SideLeft, SideRight } from "./style";
import { sliderData } from "./sliderData";
import Button from "../Button";

function Slider() {
  return (
    <Container>
      <Carousel itemsToShow={1}>
        {/* Fazendo um map dos itens em sliderData */}
        {sliderData.map((item, key) => {
          {
            /* Retornando um component, para cada objeto dentro de sliderData */
          }
          return (
            <Item key={key}>
              <SideLeft>
                <img src={item.img} alt={item.text.alt} title={item.text.alt} />
              </SideLeft>
              <SideRight>
                <span>{item.text.subtitle}</span>
                <h1>{item.text.title}</h1>
                <p>{item.text.description}</p>
                <Button text={"Pedir Agora"} />
              </SideRight>
            </Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Slider;
