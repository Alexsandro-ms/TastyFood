import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.font};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
`;
