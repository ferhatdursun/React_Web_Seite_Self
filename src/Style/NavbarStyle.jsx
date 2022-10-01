import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1vh;
  margin-bottom: 1vh;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

export const Ferhat = styled.i`
  font-size: xx-large;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 0.6vw;
  cursor: pointer;
  
`;

export const Menu_1 = styled.div`
  padding-right: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.7rem;
  }
`;


export const E = styled.i`
  color: blueviolet;
`;

export const Menu = styled.div`
  display: flex;
  font-size: small;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const Span = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
`;

