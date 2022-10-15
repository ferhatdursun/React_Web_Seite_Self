import React from "react";
import { useNavigate } from "react-router-dom";
import FireBlogApp from "../assets/Fire_Blog_App.png";
import fireblog from "../assets/fireblog.gif";
import task_tracker from "../assets/task_tracker.gif";
import tour_places from "../assets/tour-project.gif";
import FireContactApp from "../assets/firecontact.gif";
import calculator from "../assets/calculator.gif"
import jsGuessNumber from "../assets/jsGuessNumber.gif"
import {
  FireBlogAppContainer,
  Img,
  Container,
  H4
} from "../Style/MeinProjectStyle";

const MeinProject = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FireBlogAppContainer>
        <H4>React_Fire_Blog_App</H4>
        <Img src={fireblog} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/FireBlogAppDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>React_Task_Tracker</H4>
        <Img src={task_tracker} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/TaskTrackerDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>React_Tour_Places</H4>
        <Img src={tour_places} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/TourPlacesDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>React_Fire_Contact_App</H4>
        <Img src={FireContactApp} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/FireContactAppDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>JavaScript_Calculator</H4>
        <Img src={calculator} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/JsCalculatorDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>Js_Guess_Number</H4>
        <Img src={jsGuessNumber} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/JsGuessNumberDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>React_Fire_Blog_App</H4>
        <Img src={FireBlogApp} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/TaskTrackerDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>React_Fire_Blog_App</H4>
        <Img src={FireBlogApp} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/TaskTrackerDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>React_Fire_Blog_App</H4>
        <Img src={FireBlogApp} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/TaskTrackerDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>React_Fire_Blog_App</H4>
        <Img src={FireBlogApp} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/TaskTrackerDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
      <FireBlogAppContainer>
        <H4>React_Fire_Blog_App</H4>
        <Img src={FireBlogApp} alt="" />
        <button
          type="button"
          class="btn btn-danger d-block"
          onClick={() => navigate("/TaskTrackerDetails")}
        >
          Details
        </button>
      </FireBlogAppContainer>
    </Container>
  );
};

export default MeinProject;
