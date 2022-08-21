import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }
`;

export const ItemLinks = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.font};
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 10px 25px;
  &.active {
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.secundary};
    color: white;
    font-weight: 500;
  }
`;
