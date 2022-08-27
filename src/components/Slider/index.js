// Bibliotecas
import React from "react";
import Carousel from "react-elastic-carousel";

// Components
import {
  Container,
  ContainerSquare,
  Square,
  Item,
  SideLeft,
  SideRight,
} from "./style";
import { sliderData } from "./sliderData";
import Button from "../Button";

function Slider() {
  return (
    <Container>
      <Carousel
        itemsToShow={1}
        enableAutoPlay
        autoPlaySpeed={3600}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        renderArrow={() => {
          // retornando fragments vazio, para remover os buttons default
          return <></>;
        }}
      >
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
                <div>
                  <Button text={"Pedir Agora"} />
                </div>
              </SideRight>
            </Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Slider;
