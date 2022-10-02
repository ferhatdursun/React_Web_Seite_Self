import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "../Style/AboutStyles";
import codingSvg from "../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Ferhat Dursun </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Ferhat Dursun</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h3>
          I've already known Python, Django, JS, ReactJS, HTML5,
          Css3, SQL, Linux, Git, Github.
        </h3>
        <h2>
          <a href="mailto:Ferhatdursnu@gmail.com">Send email</a> :
          ferhatdursnu@gmail.com
        </h2>
        {/* <a href="whatsapp://tel:3216541234">call me</a>  */}
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
