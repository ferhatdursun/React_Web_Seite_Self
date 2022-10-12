import styled from "styled-components";


export const Img = styled.img`
  width: 350px;
  height: 240px;
  margin-bottom: 1rem;
`;

export const FireBlogAppContainer = styled.div`
  width: 25%;
  margin: 2rem;
  flex-direction: column;
`;



//! How to use media queries with styled components
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color:#04ABB5;

  @media (max-width: 1254px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 868px) {
    width: 50rem;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 40rem;
  }
  @media (max-width: 480px) {
    width: 30rem;
  }
  @media (max-width: 320px) {
    width: 23rem;
  }
`;

export const H4 = styled.h4`
color: white;
`