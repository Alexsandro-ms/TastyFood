import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const ContainerInput = styled.div`
  width: 100%;
  height: 100%;
  input {
    position: relative;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.secundary};
    width: 35%;
    border: none;
    padding: 15px 35px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.secundary};
    margin: 15px 0;
    margin-left: 50px;
    ::placeholder {
      color: ${(props) => props.theme.colors.secundary};
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.95rem;
    }
    @media screen and (max-width: 761px) {
      width: 50%;
    }
    @media screen and (max-width: 600px) {
      width: 70%;
    }
  }
`;
export const ContainerItens = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ContainerItem = styled.div`
  width: 100%;
  height: 325px;
  margin: 15px 12px;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  img {
    width: 100%;
  }
  button {
    width: 150px;
    height: 50px;
  }
  p {
    color: gray;
  }
`;
