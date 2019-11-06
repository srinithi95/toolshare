import React from "react";
import "./Carousel.css";
import image1 from "../images/miter_saw.jpg";
import { connect } from "react-redux";
import { Login } from "./Login.jsx";

export const Carousel = ({ isLoggedIn }) => {
  console.log("in carousel",isLoggedIn);
  console.log('state');
  return (
    <div>
      <div className="wrapping">
        <div className="left-arrow">
          <span className="glyphicon glyphicon-chevron-left left-arrow-wrap"></span>
        </div>
        <div className="image-holder">
          <img className="image-wrap" src={image1} alt="" />
        </div>
        <div className="right-arrow">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </div>
      </div>
      <div>{!isLoggedIn && <div>Welcome</div>}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(mapStateToProps)(Carousel);
