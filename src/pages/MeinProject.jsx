import React from "react";
import { useNavigate } from "react-router-dom";
import FireBlogApp from "../assets/Fire_Blog_App.png";
import fireblog from "../assets/fireblog.gif";
import task_tracker from "../assets/task_tracker.gif";
import tour_places from "../assets/tour-project.gif";
import FireContactApp from "../assets/firecontact.gif";
import calculator from "../assets/calculator.gif"
import {
  FireBlogAppContainer,
  Img,
  Button,
  Container,
} from "../Style/MeinProjectStyle";

const MeinProject = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FireBlogAppContainer>
        <h4>React_Fire_Blog_App</h4>
        <Img src={fireblog} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Task_Tracker</h4>
        <Img src={task_tracker} alt="" />
        <Button onClick={() => navigate("/TaskTrackerDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Tour_Places</h4>
        <Img src={tour_places} alt="" />
        <Button onClick={() => navigate("/TourPlacesDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Fire_Contact_App</h4>
        <Img src={FireContactApp} alt="" />
        <Button onClick={() => navigate("/FireContactAppDetails")}>
          Details
        </Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>Javascript_Calculator</h4>
        <Img src={calculator} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Fire_Blog_App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Fire_Blog_App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Fire_Blog_App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Fire_Blog_App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Fire_Blog_App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <h4>React_Fire_Blog_App</h4>
        <Img src={FireBlogApp} alt="" />
        <Button onClick={() => navigate("/FireBlogAppDetails")}>Details</Button>
      </FireBlogAppContainer>
    </Container>
  );
};

export default MeinProject;
