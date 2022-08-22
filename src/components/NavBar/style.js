import styled from "styled-components";
// Componente links do menu
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 761px) {
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.colors.background};
    position: fixed;
    top: 0;
    left: ${(props) => props.active};
    transition: all 1s;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    @media screen and (max-width: 761px) {
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;

/* Recebendo o Navlink e estilizando */
export const ItemLinks = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.font};
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0 5px;
  /* Estilizando a classe active padrão do NavLink */
  &.active {
    background-color: ${(props) => props.theme.colors.secundary};
    color: white;
    font-weight: 500;
  }
`;
