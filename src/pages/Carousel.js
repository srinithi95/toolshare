import React from "react";
import "./Carousel.css";
import image1 from "../images/miter_saw.jpg";

export const Carousel = () => {
  return (
    <div className="wrapping">
      <div className="left-arrow">
        <span className="glyphicon glyphicon-chevron-left left-arrow-wrap"></span>
      </div>
      <div className="image-holder">
        <img className="image-wrap" src={ image1 } />
      </div>
      <div className="right-arrow">
        <span className="glyphicon glyphicon-chevron-right"></span>
      </div>
    </div>
  );
};
