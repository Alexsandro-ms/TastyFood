import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 25px;
    color: ${(props) => props.theme.colors.font};
  }
  span {
    color: ${(props) => props.theme.colors.font};
    font-size: 1.25rem;
    font-weight: 400;
    margin-left: 10px;
    pointer-events: none;
  }
`;
