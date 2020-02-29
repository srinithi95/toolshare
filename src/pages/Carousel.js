import React from "react";
import ReactDOM from "react-dom";
import "./Carousel.css";
import axios from "axios";
import { connect } from "react-redux";
import StoryDetails from "../pages/StoryDetails";
import ToolDetails from "./ToolDetails";

const Carousel = ({ isLoggedIn, firstName }) => {
  console.log("in carousel, logged in is", isLoggedIn);
  const [storyArray, setStoryArray] = React.useState([]);
  const [toolArray, setToolArray] = React.useState([]);
  const [searchStory, setSearchStory] = React.useState("");
  const [searchTool, setSearchTool] = React.useState("");
  const [storyActive, setStoryActive] = React.useState(true);
  const [toolActive, setToolActive] = React.useState(false);

  React.useEffect(() => {
    console.log("use effect 1 called");

    axios.get("http://localhost:3000/getStory").then(response => {
      console.log(response.data);
      setStoryArray(response.data);
    });
  }, []);

  React.useEffect(() => {
    console.log("use effect 1 called");
    axios.get("http://localhost:3000/getTool").then(response => {
      // console.log(response.data);
      setToolArray(response.data);
    });
  }, []);

  const handleSearchStory = () => {
    console.log("in handle search story");

    //should be post request
    const searchData = {
      searchStory
    };

    axios
      .post("http://localhost:3000/searchStory", { searchData })
      .then(response => {
        console.log(response.data);
        setStoryArray(response.data);
      });
  };

  const handleSearchTool = () => {
    console.log("in handle search story");

    //should be post request
    const searchData = {
      searchTool
    };

    axios
      .post("http://localhost:3000/searchTool", { searchData })
      .then(response => {
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
    console.log("handle story details called",s);
    ReactDOM.render(<StoryDetails story={s}/>, document.getElementById("xyz"));
  }

  const handleToolDetails = (t) => {
    console.log("handle tool details called",t);
    ReactDOM.render(<ToolDetails tool={t} />, document.getElementById("xyz"));
  }

  return (
    <div id="xyz" className="container wrapper">
      {/* part to tell that the user is logged in or not */}
      {!isLoggedIn && (
        <div className="inside-wrapper">
          Please log in to post story or tool.
        </div>
      )}

      {isLoggedIn && (
        <div className="inside-wrapper">You are loggedIn as: {firstName}</div>
      )}

      {/* tabs */}
      <div className="align-centre1 inside-wrapper">
        <div id="stories-tab" onClick={changeToStory} className="brown-border font-size-20 button-inside-wrapper text-align-centre cursor-pointer">
          <b> Stories </b>
        </div>
        <div id="tools-tab" onClick={changeToTool} className="brown-border font-size-20 button-inside-wrapper text-align-centre cursor-pointer">
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
                  onChange={e => {
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
                {storyArray.map(s => (
                  <div>
                    <b>{s.posting_title}</b>
                    <div>
                      <span>Description:</span> <span>{s.description}</span>
                    </div>
                    <div>
                      <span>Tools:</span> <span>{s.tool}</span>
                    </div>
                    <div>
                      <span>Materials:</span> <span>{s.material}</span>
                    </div>
                    <div>
                      <span>Category:</span> <span>{s.category}</span>
                    </div>
                    <div className="bottom-border">
                      <i>
                        <span>Tag:</span> <span>{s.tag}</span>
                      </i>
                      <div><button onClick={() => handleStoryDetails(s)}> View more</button></div>
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
                  onChange={e => {
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
                {toolArray.map(t => (
                  <div>
                    <b>{t.tool_name}</b>
                    <div className="flex-wrapper-row">
                      <div className="width-500px">
                        <span>Make:</span> <span>{t.make}</span>
                      </div>
                      <div className="width-500px">
                        <span>Contact Name:</span> <span>{t.contact_name}</span>
                      </div>
                    </div>
                    <div className="flex-wrapper-row">
                      <div className="width-500px">
                        <span>Model:</span> <span>{t.model_name}</span>
                      </div>
                      <div className="width-500px">
                        <span>Email:</span> <span> {t.email} </span>
                      </div>
                    </div>
                    <div className="flex-wrapper-row">
                      <div className="width-500px">
                        <span>Price:</span> <span>{t.price}</span>
                      </div>
                      <div className="width-500px">
                        <span>Number:</span> <span>{t.contact_number}</span>
                      </div>
                    </div>
                    <div className="bottom-border">
                      <i>
                        <span>Suggested Project: </span>
                        <span>{t.suggested_project}</span>
                      </i>
                      <div><button onClick={() => handleToolDetails(t)}> View more</button></div>
                    </div>
                  </div>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  firstName: state.userReducer.firstName
});

export default connect(mapStateToProps)(Carousel);
