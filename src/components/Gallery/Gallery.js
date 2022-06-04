import React from "react";
import Mountain from "../../images/mountain.jpeg";
import "./Gallery.css";

const gallery = () => {
  return (
    <>
      <div className="main-container">
        <div className="gallery-content">
          <div className="gallery-banner">
            <img src={Mountain} alt="" />
          </div>
          <h1>Check out some photos!</h1>
        </div>
      </div>
    </>
  );
};

export default gallery;
