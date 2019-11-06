import React from "react";
import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Carousel } from "./pages/Carousel";
import { ShareYourStory } from "./pages/ShareYourStory";
// import { RegisterUsers } from "./pages/RegisterUsers";
//import userReducer from './redux/reducers/userReducer';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import RegisterUsers from "./pages/RegisterUsers";
import Login from "./pages/Login";
import { setIsLoggedIn } from "./redux/actions/userActions";
import { useStore } from 'react-redux'

export function App({ isLoggedIn }) {
  return (
    <div>
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
        {/* <div className="nav-bar-item">
          <NavLink to="/registerusers" className="nav-bar-button">
            Register User
          </NavLink>
        // </div> */}
        {!isLoggedIn && (
          <div className="nav-bar-item">
          <NavLink to="/login" className="nav-bar-button">
            Login
          </NavLink>
        </div>
        )}
      </div>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registerusers" component={RegisterUsers} />
          <Route path="/shareyourstory" component={ShareYourStory} />
          <Route path="/" component={Carousel} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(App);
