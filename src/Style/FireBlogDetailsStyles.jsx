import styled from "styled-components";

export const Main = styled.div`
  margin: 1rem;
`;

export const DivComment = styled.div`
  display: flex;
  justify-content: space-around;
  border: 3px solid blueviolet;
  padding: 3rem 0;
  margin-bottom: 2rem;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Comment = styled.div`
  border: 1px solid orange;
  width: 40%;
  padding: 1rem 2rem;

  @media (max-width: 1200px) {
    width: 41rem;
    height: 15rem;
    margin-top: 2rem;
    border: 2px solid brown;
  }
  @media (max-width: 768px) {
    width: 25rem;
    height: 20rem;
  }
  @media (max-width: 490px) {
    width: 16rem;
    height: 22rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 2rem;
  color: blueviolet;
`;

export const Button = styled.button`
  color: orange;
  background-color: black;
  width: 4rem;
  margin-bottom: 0.5rem;
`;
export const Back_Img = styled.img`
  width: 4rem;
`;
export const Back_Button = styled.div`
  display: flex;
  flex-direction: column;
  width: 4rem;
  :hover {
    cursor: pointer;
  }
`;
export const GitHub = styled.a`
  text-decoration-line: none;
  color: orange;
  font-size: larger;
  :hover {
    color: red;
  }
`;

export const Kontakt_Icon = styled.img`
  width: 3rem;
  /* padding-top: 0.5rem; */
`;

export const Container_Back_Kontakt = styled.div`
  display: flex;
`;

export const Div_GitHub_Netlify = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

export const Container_GitHub_Netlify = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const Iframe = styled.iframe`
  @media (max-width: 768px) {
    width: 28rem;
  }
  @media (max-width: 490px) {
    width: 13rem;
    height: 30rem;
  }
  
`;
