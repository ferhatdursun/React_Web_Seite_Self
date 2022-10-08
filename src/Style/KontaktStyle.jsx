import styled from "styled-components";

export const A = styled.a`
margin-top: 0.5rem;
color: orange;
font-size: larger;
text-decoration-line: none;
:hover {
  color: red;
}
`

export const Img_Fd = styled.img`
width: 20rem;
`

export const Kontakt_Icon = styled.img`
width: 3rem;
/* padding-top: 0.5rem; */
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 5% 0;
  @media (max-width: 768px) {
    width: 40rem;
  }
  @media (max-width: 480px) {
    width: 30rem;
  }
  @media (max-width: 320px) {
    width: 23rem;
  }
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
  margin-top: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;