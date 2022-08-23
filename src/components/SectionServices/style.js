import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  margin: 0 auto;
  @media screen and (max-width: 761px) {
    width: 100%;
  }
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1em;
  }
  ul {
    display: flex;
    list-style: none;
    @media screen and (max-width: 761px) {
      flex-direction: column;
    }
  }
`;

export const Icons = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  svg {
    font-size: 5rem;
  }
  p {
    max-width: 190px;
    text-align: center;
    color: gray;
  }
`;
