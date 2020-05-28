import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  setUserId,
  setIsLoggedIn,
  setFirstName,
  setAddress,
  setCity,
  setState,
  setZipCode,
  setUserEmail,
  setContactNumber,
} from "../redux/actions/userActions";
import ReactDOM from "react-dom";
import StoryDetails from "../pages/StoryDetails";
import ToolDetails from "./ToolDetails";
import UserToolDetails from "./UserToolDetails";
import "./landingpage.css";
import BookingPage from "./BookingPage";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const LandingPage = ({ dispatch, isLoggedIn, firstName, userId }) => {
  console.log("in landing page");
  const [storyArray, setStoryArray] = React.useState([]);
  const [toolArray, setToolArray] = React.useState([]);
  const [searchStory, setSearchStory] = React.useState("");
  const [searchTool, setSearchTool] = React.useState("");
  const [storyActive, setStoryActive] = React.useState(true);
  const [toolActive, setToolActive] = React.useState(false);
  const [mainStoryArray, setMainStoryArray] = React.useState([]);
  // const [storyToolArray, setStoryToolArray] = React.useState([]);

  React.useEffect(() => {
    console.log("use effect 1 called");
    axios.get("http://localhost:3000/getStory").then((response) => {
      console.log(response.data);
      setStoryArray(response.data);
      setMainStoryArray(response.data);
      // setStoryToolArray(response.data.tool1);
      // console.log("----------", storyToolArray);
    });
  }, []);

  React.useEffect(() => {
    console.log("use effect 1 called");
    axios.get("http://localhost:3000/getTool").then((response) => {
      // console.log(response.data);
      setToolArray(response.data);
    });
  }, []);

  if (!isLoggedIn) {
    let cookieData = document.cookie.split(";");
    let eqPos1 = cookieData[0].indexOf("=") + 1;
    let email = cookieData[0].substr(eqPos1, cookieData[0].length);
    console.log("****Email is****", email);

    let eqPos2 = cookieData[1].indexOf("=") + 1;
    let password = cookieData[1].substr(eqPos2, cookieData[1].length);
    console.log("***password is***", password);
    const authData = {
      email,
      password 
    };
    console.log("logindata in carousel", authData);

    axios.post("http://localhost:3000/auth", { authData }).then((response) => {
      const res = response.data;
      console.log("response", response);
      if (res === "not registered user") {
        alert("You are not logged in");
      } else {
        let userId = res[0].users_id;
        console.log(userId);
        dispatch(setUserId(userId));
        console.log("before dispatch", res[0]);
        dispatch(setIsLoggedIn(true));
        let firstName = res[0].first_name;
        let email = res[0].email;
        dispatch(setFirstName(firstName));
        dispatch(setUserEmail(email));
        dispatch(setAddress(res[0].address));
        dispatch(setContactNumber(res[0].contact_number));
        dispatch(setCity(res[0].city));
        dispatch(setState(res[0].state));
        dispatch(setZipCode(res[0].zipcode));
      }
    });
  }

  const handleSearchStory = () => {
    console.log("in handle search story");
    const searchData = {
      searchStory,
    };

    axios
      .post("http://localhost:3000/searchStory", { searchData })
      .then((response) => {
        console.log(response.data);
        setStoryArray(response.data);
      });
  };

  const handleSearchTool = () => {
    console.log("in handle search story");
    //should be post request
    const searchData = {
      searchTool,
    };

    axios
      .post("http://localhost:3000/searchTool", { searchData })
      .then((response) => {
        console.log(response.data);
        setToolArray(response.data);
      });
  };

  const changeToStory = () => {
    setStoryActive(true);
    setToolActive(false);
  };

  const changeToTool = () => {
    setStoryActive(false);
    setToolActive(true);
  };

  const handleStoryDetails = (s) => {
    console.log("handle story details called", s);
    ReactDOM.render(<StoryDetails story={s} />, document.getElementById("xyz"));
  };

  const handleToolDetails = (t) => {
    console.log("handle tool details called", t);
    ReactDOM.render(<ToolDetails tool={t} />, document.getElementById("xyz"));
  };

  const handleLogout = () => {
    document.cookie = `email=""`;
    document.cookie = `password=""`;
  };

  const handleStorySave = (s) => {
    console.log("Story id is", s.story_id);
    console.log("User id is", userId);

    let storyId = s.story_id;
    const saveData = {
      storyId,
      userId,
    };

    axios
      .post("http://localhost:3000/saveStory", { saveData })
      .then((response) => {
        console.log(response);
        alert("Story Saved.");
      });
  };
  console.log(storyArray);

  const handleToolOnClick = (tool) => {
    // const toolData = [tool, userId]
    ReactDOM.render(
      <UserToolDetails tool={[tool, userId]} />,
      document.getElementById("xyz")
    );
  };

  const changeCategory = (selectedCategory) => {
    console.log("in change Category", selectedCategory);
    console.log("storyarray ----", storyArray);

    if(selectedCategory == "All")
      setStoryArray(mainStoryArray)
    else{
      var tempArray = mainStoryArray.filter(
        (mainStoryArray) => mainStoryArray.category1 == selectedCategory || mainStoryArray.category2 == selectedCategory || mainStoryArray.category3
      );
      console.log("----te", tempArray, typeof selectedCategory);
      setStoryArray(tempArray);
    }
  };

  function Try() {
    return (
      <div id="xyz" className="container wrapper">
      {/* part to tell that the user is logged in or not */}
      {!isLoggedIn && (
        <div className="inside-wrapper">
          Please log in to post story or tool.
        </div>
      )}

      {isLoggedIn && (
        <div>
          <div className="inside-wrapper">
            You are loggedIn as: {firstName}, {userId}
          </div>
          <div>
            {" "}
            <button onClick={handleLogout}> Logout </button>
          </div>
        </div>
      )}

      {/* Display categories */}
      <div className="align-centre1 inside-wrapper">
        <div
          id="stories-tab"
          className="green-border font-size-16 button-inside-wrapper text-align-centre cursor-pointer"
          onClick={() => changeCategory("All")}
        >
          Indoor stories
        </div>
        <div
          id="stories-tab"
          className="green-border font-size-16 button-inside-wrapper text-align-centre cursor-pointer"
          onClick={() => changeCategory("Living room upgrade")}
        >
          Outdoor stories
        </div>
        <div
          id="tools-tab"
          className="green-border font-size-16 button-inside-wrapper text-align-centre cursor-pointer"
          onClick={() => changeCategory("Outdoor")}
        >
          Gardening
        </div>
        <div
          id="tools-tab"
          className="green-border font-size-16 button-inside-wrapper text-align-centre cursor-pointer"
          onClick={() => changeCategory("Bike and Car")}
        >
          Bike or cars
        </div>
        <div
          id="tools-tab"
          className="green-border font-size-16 button-inside-wrapper text-align-centre cursor-pointer"
          onClick={() => changeCategory("Gardening")}
        >
          Others
        </div>
      </div>

      {/* subcategories */}
      {/* <div className="align-centre1 inside-wrapper">
        <div
          id="stories-tab"
          className="green-border font-size-16 button-inside-wrapper text-align-centre cursor-pointer"
          onClick={() => changeCategory("All")}
        >
          Living room upgrade
        </div>
        <div
          id="stories-tab"
          className="green-border font-size-16 button-inside-wrapper text-align-centre cursor-pointer"
          onClick={() => changeCategory("Living room upgrade")}
        >
          Bedroom upgrade
        </div>
        <div
          id="tools-tab"
          className="green-border font-size-16 button-inside-wrapper text-align-centre cursor-pointer"
          onClick={() => changeCategory("Outdoor")}
        >
          Kitchen upgrade
        </div>
      </div> */}

      {/* tabs */}
      <div className="align-centre1 inside-wrapper">
        <div
          id="stories-tab"
          onClick={changeToStory}
          className="brown-border font-size-20 button-inside-wrapper text-align-centre cursor-pointer"
        >
          <b> Stories </b>
        </div>
        <div
          id="tools-tab"
          onClick={changeToTool}
          className="brown-border font-size-20 button-inside-wrapper text-align-centre cursor-pointer"
        >
          <b> Tools </b>
        </div>
      </div>

      {/* Tab contents */}
      <div>
        {storyActive && (
          <div>
            {/* Stories tab */}
            <div className="align-centre1 inside-wrapper">
              <div className="font-size-20">
                <b> Stories </b>
              </div>
            </div>

            {/* Search bar in stories */}
            <div className="align-centre1 inside-wrapper">
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    setSearchStory(e.target.value);
                  }}
                />
              </div>
              <div>
                <button onClick={handleSearchStory}> Find story </button>
              </div>
            </div>

            {/* Display all stories using array */}
            <div>
              <ol>
                {storyArray.map((s) => (
                  <div className="postingframe">
                    <div className="width500px">
                      <b>{s.posting_title}</b> by <b>{s.first_name}</b>
                      <div>
                        <span>Description:</span> <span>{s.description}</span>
                      </div>
                      <div>
                        <span>Tools:</span>{" "}
                        <span
                          id="toolspan"
                          onClick={() => handleToolOnClick(s.tool1)}
                          className="margin-right-10px"
                        >
                          {s.tool1}
                        </span>
                        <span
                          id="toolspan"
                          onClick={() => handleToolOnClick(s.tool2)}
                          className="margin-right-10px"
                        >
                          {s.tool2}
                        </span>
                        <span
                          id="toolspan"
                          onClick={() => handleToolOnClick(s.tool3)}
                          className="margin-right-10px"
                        >
                          {s.tool3}
                        </span>
                        <span
                          id="toolspan"
                          onClick={() => handleToolOnClick(s.tool4)}
                          className="margin-right-10px"
                        >
                          {s.tool4}
                        </span>
                        <span
                          id="toolspan"
                          onClick={() => handleToolOnClick(s.tool5)}
                          className="margin-right-10px"
                        >
                          {s.tool5}
                        </span>
                      </div>
                      <div>
                        <span>Materials:</span> <span>{s.material1} </span>
                        <span>{s.material2} </span>
                        <span>{s.material3} </span>
                        <span>{s.material4} </span>
                        <span>{s.material5} </span>
                      </div>
                      <div>
                        {/* <span>Category:</span> <span>{s.category}</span> */}
                      </div>
                      <div className="bottom-border">
                        <i>
                          <span>Tag:</span> <span>{s.tag1}</span> <span>{s.tag2}</span> <span>{s.tag3}</span>
                        </i>
                        <div>
                          <button onClick={() => handleStoryDetails(s)}>
                            View more
                          </button>
                          {isLoggedIn && (
                            <button onClick={() => handleStorySave(s)}>
                              Save for Later
                            </button>
                          )}
                          {/* <div> {s.image_url} </div> */}
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src={s.image_url} className="imageframe" />
                    </div>
                  </div>
                ))}
              </ol>
            </div>
          </div>
        )}

        {toolActive && (
          <div>
            {/* Tools tab */}
            <div className="align-centre1 inside-wrapper">
              <div className="font-size-20">
                <b> Tools </b>
              </div>
            </div>

            {/* Search bar in tools */}
            <div className="align-centre1 inside-wrapper">
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    setSearchTool(e.target.value);
                  }}
                />
              </div>
              <div>
                <button onClick={handleSearchTool}> Find tools </button>
              </div>
            </div>

            {/* Display all tools using array */}
            <div>
              <ol>
                {toolArray.map((t) => (
                  <div className="round-border-tooldiv">
                    <div>
                      <b>{t.tool_name}</b>
                      <div className="flex-wrapper-row">
                        <div className="width-350px">
                          <span>Make:</span> <span>{t.make}</span>
                        </div>
                        <div className="width-350px">
                          <span>Contact Name:</span>{" "}
                          <span>{t.contact_name}</span>
                        </div>
                        <div>
                          <Link to={{pathname: '/bookingpage', state: {toolname:t.tool_name, toolId: t.tool_id}}}>
                          <div className="round-border-button width-50px"> Borrow </div>
                          </Link>
                        </div>
                      </div>
                      <div className="flex-wrapper-row">
                        <div className="width-350px">
                          <span>Model:</span> <span>{t.model_name}</span>
                        </div>
                        <div className="width-350px">
                          <span>Email:</span> <span> {t.email} </span>
                        </div>
                      </div>
                      <div className="flex-wrapper-row">
                        <div className="width-350px">
                          <span>Price:</span> <span>{t.price}</span><i> $/hour</i>
                        </div>
                        <div className="width-350px">
                          <span>Number:</span> <span>{t.contact_number}</span>
                        </div>
                      </div>
                      <div className="bottom-border">
                        <i>
                          <span>Suggested Project: </span>
                          <span>{t.suggested_project}</span>
                        </i>
                        <div>
                          <button onClick={() => handleToolDetails(t)}>
                            View more
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src={t.image_url} className="imageframe" />
                    </div>
                  </div>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
    )
  }

  return (
    <Router>
    
    <Switch>
      <Route path="/bookingpage">
        <BookingPage />
      </Route>
      <Route path="/">
        <Try />
      </Route>
    </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  firstName: state.userReducer.firstName,
  userId: state.userReducer.userId,
});

export default connect(mapStateToProps)(LandingPage);
