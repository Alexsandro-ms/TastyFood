import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  @media screen and (max-width: 761px) {
    height: 100vh;
    margin-top: 30rem;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const SideLeft = styled.div`
  width: 50%;
  min-height: 250px;
  @media screen and (max-width: 761px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 761px) {
    align-items: center;
    width: 95%;
    text-align: center;
  }
  h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0.1em;
  }
  p {
    max-width: 500px;
    color: gray;
  }
`;

export const ButtonContainer = styled.div`
  width: 150px;
  height: 50px;
`;
export const SideRight = styled.div`
  width: 50%;
  min-height: 250px;
  display: flex;
  align-items: center;
  img {
    margin: 0 auto;
  }
  @media screen and (max-width: 761px) {
    width: 100%;
  }
`;
