import React from "react";
import {
  Container,
  E,
  Div,
  A,
  Kontakt_Icon,
  Img_Fd,
  Container_Kontakt,
  Div_Kontakt_Details,
} from "../Style/KontaktStyle";
import Gmail_Icon from "../assets/Gmail.png";
import Ferhat_Foto from "../assets/fd.png";
import GitHub_Icon from "../assets/GitHub.png";
import Linkedin_Icon from "../assets/Linkedin.png";
const Kontakt = () => {
  return (
    <Container>
      <Div>
        <Img_Fd src={Ferhat_Foto} alt="" />
        {/* <h3>
          F<E>e</E>rhat Dursun
        </h3> */}
        <Container_Kontakt>
          <Div_Kontakt_Details>
            <A href="mailto:Ferhatdursnu@gmail.com">Send email</A>
            <A href="mailto:Ferhatdursnu@gmail.com">
              <Kontakt_Icon  src={Gmail_Icon} alt="" />
            </A>
          </Div_Kontakt_Details>
          {/* <i class="bi bi-envelope"></i> */}
          {/* <h4>
          F<E>e</E>rhatdursnu@gmail.com
        </h4> */}
          <br />
          <Div_Kontakt_Details>
            <A
              href="https://github.com/ferhatdursun"
              target="_blank"
              rel="noreferrer"
              //! Burada ki rel="noreferrer" target'in calismasi icin.
            >
              GitHub{" "}
            </A>
            <A
              href="https://github.com/ferhatdursun"
              target="_blank"
              rel="noreferrer"
              //! Burada ki rel="noreferrer" target'in calismasi icin.
            >
              <Kontakt_Icon src={GitHub_Icon} alt="" />
            </A>
          </Div_Kontakt_Details>
          <br />
          <Div_Kontakt_Details>
            <A
              href="https://www.linkedin.com/in/ferhat-dursun1/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </A>
            <A
              href="https://www.linkedin.com/in/ferhat-dursun1/"
              target="_blank"
              rel="noreferrer"
            >
              <Kontakt_Icon src={Linkedin_Icon} alt="" />
            </A>
          </Div_Kontakt_Details>
        </Container_Kontakt>
      </Div>
    </Container>
  );
};

export default Kontakt;
