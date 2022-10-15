import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import MeinProject from "../pages/MeinProject";
import Kontakt from "../pages/Kontakt";
import FireBlogAppDetails from "../Details/FireBlogAppDetails";
import TaskTrackerDetails from "../Details/TaskTrackerDetails";
import TourPlacesDetails from "../Details/TourPlacesDetails";
import FireContactAppDetails from "../Details/FireContactAppDetails"
import JsCalculatorDetails from "../Details/JsCalculatorDetails";
import JsGuessNumberDetails from "../Details/JsGuessNumberDetails";
const WebRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/MeinProject" element={<MeinProject />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/FireBlogAppDetails" element={<FireBlogAppDetails />} />
        <Route path="/TaskTrackerDetails" element={<TaskTrackerDetails />} />
        <Route path="/TourPlacesDetails" element={<TourPlacesDetails />} />
        <Route path="/FireContactAppDetails" element={<FireContactAppDetails />} />
        <Route path="/JsCalculatorDetails" element={<JsCalculatorDetails />} />
        <Route path="/JsGuessNumberDetails" element={<JsGuessNumberDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
