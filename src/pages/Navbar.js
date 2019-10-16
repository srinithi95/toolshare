import React from "react";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ShareYourStory from './ShareYourStory.jsx';

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-item">
        <NavLink to="/" className="nav-bar-button">
          All Tools
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to="/" className="nav-bar-button">
          About Us
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to="/" className="nav-bar-button">
          Contact
        </NavLink>
      </div>
      <div className="nav-bar-item">
        <NavLink to="/shareyourstory" className="nav-bar-button">
          Share your story
        </NavLink>
      </div>

      <Switch>
        <Route path="/shareyourstory" component={ShareYourStory} />
      </Switch>
    </div>
  );
};
