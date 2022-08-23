import React from "react";

import { Container, Icons } from "./style";
import { IconsData } from "./iconsData";

function SectionServices() {
  return (
    <Container>
      <h1>Nossos Serviços</h1>
      <ul>
        {IconsData.map((item, key) => {
          return (
            <Icons key={key}>
              <div>{item.icon}</div>
              <p>{item.description}</p>
            </Icons>
          );
        })}
      </ul>
    </Container>
  );
}

export default SectionServices;
