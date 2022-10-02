import styled from "styled-components";

export const A = styled.a`
margin-top: 0.5rem;
color: orange;
font-size: larger;
`

export const Img_Fd = styled.img`
width: 20rem;
`

export const Kontakt_Icon = styled.img`
width: 3rem;
/* padding-top: 0.5rem; */
`

export const Container = styled.div`
  /* background: url(https://picsum.photos/1600/900); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 5% 0;

  
`;
export const E = styled.i`
  color: blueviolet;
`;

export const Div_Kontakt_Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
`;

export const Container_Kontakt = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;