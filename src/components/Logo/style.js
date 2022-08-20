import styled from "styled-components";

export const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${(props) => props.theme.colors.font};
    font-size: 1.25rem;
    font-weight: 400;
    margin-left: 10px;
    pointer-events: none;
  }
`;
