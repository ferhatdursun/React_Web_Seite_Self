import styled from "styled-components";

export const AboutContainer = styled.div`
  /* bütün about */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00acb5;
  min-height: calc(100vh - 80px);
  height: calc(100% - 100px);
  /*  Ekran yüksekliğiniz mesela 1000 piksel ise, öğenizin yüksekliği 900 piksele  eşit olacaktır.(1000 pikselin %100'ü ve eksi 100 piksel) */
  line-height: 2;
  span {
    color: orange;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
  }
  @media (max-width: 490px) {
    width: 31rem;
  }
`;
export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 2rem;
`;

export const HeaderContainer = styled.div`
  background-color: whitesmoke;
  @media (max-width: 490px) {
    width: 25rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;

  }
`;

export const InfoContainer = styled.div`
  text-align: right;
  margin: 0 10px;
  max-width: 1000px;
  border: 1px solid white;
  padding: 25px;
  border-radius: 5px;
  a {
    color: orange;
  }
  @media (max-width:490px) {
    width: 25rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const Hbir = styled.h1`
  display: block;
  @media (max-width: 490px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: block;
  }
`;

export const Span = styled.span`
text-align: center;
align-items: center;
justify-content: center;
display: flex;
`
