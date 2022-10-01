import React from "react";
import { Container, E, Div, A } from "../Style/KontaktStyle";

const Kontakt = () => {
  return (
    <Container>
      <Div>
        <h3>
          F<E>e</E>rhat Dursun
        </h3>
        <A href="mailto:Ferhatdursnu@gmail.com">Send email</A>
        <i class="bi bi-envelope"></i>
        <h4>
          F<E>e</E>rhatdursnu@gmail.com
        </h4>
        <br />
        <A
          href="https://github.com/ferhatdursun"
          target="_blank"
          rel="noreferrer"
          //! Burada ki rel="noreferrer" target'in calismasi icin.
        >
          Github{" "}
        </A>
        <br />
        <A
          href="https://www.linkedin.com/in/ferhat-dursun1/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </A>
      </Div>
    </Container>
  );
};

export default Kontakt;
