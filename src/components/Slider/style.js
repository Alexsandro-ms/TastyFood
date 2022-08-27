import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 5rem;
  @media screen and (max-width: 761px) {
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 761px) {
    flex-direction: column-reverse;
  }
`;

export const SideLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 761px) {
    width: 100%;
    height: 50%;
    margin-top: 25px;
  }
  img {
    width: 100%;
    @media screen and (max-width: 761px) {
      max-width: 350px;
    }
  }
`;
export const SideRight = styled.div`
  width: 40%;
  max-width: 400px;
  height: 100%;

  @media screen and (max-width: 761px) {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
      font-size: 2.75rem;
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

  div {
    width: 175px;
    height: 50px;
  }
`;
