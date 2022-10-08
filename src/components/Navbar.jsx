import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Ferhat, E, Menu, Menu_1, Span } from "../Style/NavbarStyle";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Ferhat onClick={() => navigate("/")}>
        F<E>e</E>rhat
      </Ferhat>
      <Menu>
      
        <Menu_1>
          <i class="fa-solid fa-info" style={{ color: "blueviolet" }}></i>
          <Span onClick={() => navigate("/About")}> Über Mich</Span>
        </Menu_1>
        <Menu_1>
          <i
            class="fa-solid fa-diagram-project"
            style={{ color: "blueviolet", paddingRight: "0.3rem" }}
          ></i>
          <Span onClick={() => navigate("/MeinProject")}>Mein Projekt</Span>
        </Menu_1>
        <Menu_1>
          <i
            class="fa-solid fa-phone-flip"
            style={{ color: "blueviolet", paddingRight: "0.2rem" }}
          ></i>
          <Span onClick={() => navigate("/Kontakt")}>Kontakt</Span>
        </Menu_1>
      </Menu>
    </Container>
  );
};

export default Navbar;
