import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  height: 90vh;
  margin: 75px auto;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SideLeft = styled.div`
  width: 50%;
  height: 100%;
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
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: gray;
  }
`;
