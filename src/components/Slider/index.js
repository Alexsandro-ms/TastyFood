import React from "react";
import Carousel from "react-elastic-carousel";

import { Container, Item, SideLeft, SideRight } from "./style";
import { sliderData } from "./sliderData";

function Slider() {
  return (
    <Container>
      <Carousel itemsToShow={1}>
        {sliderData.map((item, key) => {
          return (
            <Item key={key}>
              <SideLeft>
                <img src={item.img} />
              </SideLeft>
              <SideRight>
                <span>{item.text.subtitle}</span>
                <h1>{item.text.title}</h1>
                <p>{item.text.description}</p>
              </SideRight>
            </Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Slider;
