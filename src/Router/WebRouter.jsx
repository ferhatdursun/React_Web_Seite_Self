import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import MeinProject from "../pages/MeinProject";
import Kontakt from "../pages/Kontakt"
import FireBlogAppDetails from "../Details/FireBlogAppDetails";
import TaskTrackerDetails from "../Details/TaskTrackerDetails";

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
        <Route path="/TaskTrackerDetails" element={<TaskTrackerDetails/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
