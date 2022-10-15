import React from "react";
import {
  Main,
  DivComment,
  Title,
  Comment,
  Back_Img,
  Back_Button,
  GitHub,
  Kontakt_Icon,
  Container_Back_Kontakt,
  Div_GitHub_Netlify,
  Container_GitHub_Netlify,
  Iframe,
} from "../Style/AllDetailsStyles";
import { useNavigate } from "react-router-dom";
import Back_Icon from "../assets/Back_Icon.jpeg";
import GitHub_Icon from "../assets/GitHub.png";

const JsGuessNumberDetails = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Title>JavaScript_Guess_Number</Title>
      <DivComment>
        <div>
          <Iframe
            width="660"
            height="369"
            src="https://www.youtube.com/embed/2xbyrtJ76AE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            //! Burada allowFullScreen Youtubeden Default olarak F ve S harflari kücük olarak geliyo. Deswegen page de tam ekran özelligi calismiyor.
          ></Iframe>
        </div>
        <Comment>
          <p>asdasd</p>
        </Comment>
      </DivComment>
      <Container_Back_Kontakt>
        <Back_Button>
          <Back_Img
            onClick={() => {
              navigate(-1);
            }}
            src={Back_Icon}
            alt=""
          />
        </Back_Button>
        <Container_GitHub_Netlify>
          <Div_GitHub_Netlify>
            <GitHub
              href="https://github.com/ferhatdursun/JS_DOM_GuessNumber"
              target="_blank"
              rel="noreferrer"
              //! Burada ki rel="noreferrer" target'in calismasi icin.
            >
              GitHub{" "}
            </GitHub>
            <GitHub
              href="https://github.com/ferhatdursun/JS_DOM_GuessNumber"
              target="_blank"
              rel="noreferrer"
              //! Burada ki rel="noreferrer" target'in calismasi icin.
            >
              <Kontakt_Icon src={GitHub_Icon} alt="" />
            </GitHub>
          </Div_GitHub_Netlify>
        </Container_GitHub_Netlify>
      </Container_Back_Kontakt>
    </Main>
  );
};

export default JsGuessNumberDetails;
