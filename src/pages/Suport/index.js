import React from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { Container, ContainerButton, Content } from "./style";

function Suport() {
  return (
    <Container>
      <Header />
      <Content>
        <h3>Formulário</h3>
        <input type={"text"} placeholder={"Primeiro Nome"} />
        <input type={"text"} placeholder={"Sobrenome"} />
        <input type={"email"} placeholder={"E-mail para Contato"} />
        <input type={"text"} placeholder={"Mensagem"} />
        <ContainerButton>
          <Button text={"Enviar"} />
        </ContainerButton>
      </Content>
    </Container>
  );
}

export default Suport;
