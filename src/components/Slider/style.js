import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  margin: 75px auto;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 761px) {
    flex-direction: column-reverse;
    height: 100vh;
  }
`;

export const SideLeft = styled.div`
  width: 50%;
  @media screen and (max-width: 761px) {
    width: 100%;
  }
  img {
    width: 100%;
    max-width: 423px;
    height: 100%;
  }
`;
export const SideRight = styled.div`
  width: 40%;
  max-width: 400px;
  height: 100%;
  @media screen and (max-width: 761px) {
    width: 100%;
    text-align: center;
    max-width: 100%;
  }
  span {
    font-size: 0.85rem;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
  }
  h1 {
    text-transform: uppercase;
    font-size: 3.75rem;
    font-weight: 600;
    line-height: 72px;
    text-align: left;
    @media screen and (max-width: 761px) {
      font-size: 3rem;
      text-align: center;
    }
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: gray;
    @media screen and (max-width: 761px) {
      text-align: center;
    }
  }
  button {
    margin-top: 8px;
  }
`;
