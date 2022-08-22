import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 65px;
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
  padding: 0 25px;
  height: 100%;
`;

export const ContainerMenu = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 761px) {
    width: 10%;
    justify-content: space-evenly;
  }
  button {
    margin-left: 5%;
  }
`;

export const ElementsMenu = styled.div`
  position: absolute;
  right: 0;
  z-index: 999;
  margin: 25px;
  display: flex;
  svg {
    font-size: 1.25rem;
    cursor: pointer;
    margin: 0 5px;
  }
`;

export const ContainerHamb = styled.div`
  display: none;
  @media screen and (max-width: 761px) {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 999;
  }
`;
