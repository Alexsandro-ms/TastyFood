import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }
  li {
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.font};
      font-weight: 400;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }
`;
