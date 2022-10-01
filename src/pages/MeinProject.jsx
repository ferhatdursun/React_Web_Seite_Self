import React from "react";
import { useNavigate } from "react-router-dom";
import FireBlogApp from "../assets/Fire_Blog_App.png";
import fireblog from "../assets/fireblog.gif"
import { FireBlogAppContainer, Img, Button, Container } from "../Style/MeinProjectStyle";

const MeinProject = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={fireblog} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Fire Blog App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
    </Container>
  );
};

export default MeinProject;
