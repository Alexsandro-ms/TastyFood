import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secundary};
  cursor: pointer;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
