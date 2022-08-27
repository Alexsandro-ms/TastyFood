import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Content = styled.form`
  width: 50%;
  min-height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5rem auto;
  input {
    width: 100%;
    padding: 15px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.secundary};
    border-radius: 8px;
    outline: none;
    color: ${(props) => props.theme.colors.font};
    margin: 10px 0;
    ::placeholder {
      color: ${(props) => props.theme.colors.font};
      font-weight: 500;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 65%;
  height: 60px;
  margin: 0 auto;
`;
