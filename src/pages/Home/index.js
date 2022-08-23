import React from "react";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import SectionServices from "../../components/SectionServices";
import SectionProducts from "../../components/SectionProducts";
import { Container } from "./style";

function Home() {
  return (
    <Container>
      <Header />
      <Slider />
      <SectionServices />
      <SectionProducts />
    </Container>
  );
}

export default Home;
