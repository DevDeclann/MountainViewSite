import React from "react";
import video from "../../videos/video-2.mp4";
import Button from "../Button";
import "./Hero.css";
import Cards from "../Cards/Cards";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <video src={video} autoPlay loop muted></video>
        <div className="hero-content">
          <h1>Welcome!</h1>
          <p>Look at some photos.</p>
          <div className="hero-buttons">
            <Button buttonStyle={"btn-main"}>Get Started</Button>
            <Button buttonStyle={"btn-outline"}>Check Out</Button>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Hero;
