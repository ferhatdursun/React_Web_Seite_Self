import React from "react";
import {
  Button,
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
} from "../Style/FireBlogDetailsStyles";
import { useNavigate } from "react-router-dom";
import Back_Icon from "../assets/Back_Icon.jpeg";
import GitHub_Icon from "../assets/GitHub.png";
import Linkedin_Icon from "../assets/Linkedin.png";
import Netlify_Icon from "../assets/Netlify.jpeg";
const FireBlogAppDetails = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Title>React_Fire_Blog_App</Title>
      <DivComment>
        <div>
          {/* <Iframe
            width="660"
            height="369"
            src="https://www.youtube.com/embed/oFkNWRNDP_8"
            title="React_Fire_Blog_App"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            //! Burada allowFullScreen Youtubeden Default olarak F ve S harflari kücük olarak geliyo. Deswegen page de tam ekran özelligi calismiyor.
          ></Iframe> */}
          <Iframe
            width="660"
            height="369"
            src="https://www.youtube.com/embed/PteWqKywf8k"
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
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            BACK
          </Button>

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
              href="https://github.com/ferhatdursun/React_FireBlog_App"
              target="_blank"
              rel="noreferrer"
              //! Burada ki rel="noreferrer" target'in calismasi icin.
            >
              GitHub{" "}
            </GitHub>
            <GitHub
              href="https://github.com/ferhatdursun/React_FireBlog_App"
              target="_blank"
              rel="noreferrer"
              //! Burada ki rel="noreferrer" target'in calismasi icin.
            >
              <Kontakt_Icon src={GitHub_Icon} alt="" />
            </GitHub>
          </Div_GitHub_Netlify>
          <Div_GitHub_Netlify>
            <GitHub
              href="https://ferhat-capsstone-fireblog-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
              //! Burada ki rel="noreferrer" target'in calismasi icin.
            >
              Netlify{" "}
            </GitHub>
            <GitHub
              href="https://ferhat-capsstone-fireblog-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
              //! Burada ki rel="noreferrer" target'in calismasi icin.
            >
              <Kontakt_Icon src={Netlify_Icon} alt="" />
            </GitHub>
          </Div_GitHub_Netlify>
        </Container_GitHub_Netlify>
      </Container_Back_Kontakt>
    </Main>
  );
};

export default FireBlogAppDetails;
