import React, { useMemo, useState } from "react";

import { ProductsData } from "./productsData";
import {
  Container,
  ContainerInput,
  ContainerItem,
  ContainerItens,
} from "./style";
import Button from "../Button";

function MenuComponent() {
  const [list, setList] = useState("");

  const ListFilter = useMemo(() => {
    const SearchLowerCase = list.toLowerCase();
    return ProductsData.filter((valueState) =>
      valueState.description.name.toLowerCase().includes(SearchLowerCase)
    );
  }, [list]);

  return (
    <Container>
      <ContainerInput>
        <input
          type={"text"}
          placeholder={"Procurar Item"}
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
      </ContainerInput>
      <ContainerItens>
        {ListFilter.map((item) => {
          return (
            <ContainerItem key={item.id}>
              <img src={item.image} />
              <strong>{item.description.name}</strong>
              <p>R$ {item.description.price}</p>
              <Button text={"Comprar"} />
            </ContainerItem>
          );
        })}
      </ContainerItens>
    </Container>
  );
}

export default MenuComponent;
