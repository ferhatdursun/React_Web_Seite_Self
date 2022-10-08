import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: blueviolet;
  @media (max-width: 768px) {
    width: 40rem;
  }
  @media (max-width: 480px) {
    width: 30rem;
  }
  @media (max-width: 320px) {
    width: 21rem;
  }
`;

export const Img = styled.img`
position: absolute;
width: 100vw;
height: 100vh;
  @media (max-width: 768px) {
    width: 40rem;
  }
  @media (max-width: 480px) {
    width: 30rem;
  }
  @media (max-width: 320px) {
    width: 21rem;
  }
`;

export const Foto = styled.div`
 
`;

export const Willkommen = styled.p`
font-size: 1.5rem;
`;

export const Freelance = styled.p`
font-size: 3rem;
`;

export const WebTasarimi = styled.p`
font-size:1.5rem
`;

export const Yazilar = styled.div`
  position: relative;
  text-align: center;
  padding-top: 14rem;
  color: white;
  
`;
