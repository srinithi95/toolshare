import React from "react";
import "./shareyourstory.css";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const CssTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      fontSize: "1.5rem"
    },
    "& label.Mui-focused": {
      color: "blue",
      fontSize: "1.5rem",
      maxWidth: "50%"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "crimson"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      },
      "& .MuiInputBase-input": {
        fontSize: "3rem",
        width: "50%"
      },
      "& .MuiInputBase-root": {
        width: "50%"
      },
      "& .MuiInput-root": {
        width: "50%"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export const ShareYourStory = () => {
  const [projectTitle, setProjectTitle] = React.useState("");
  const [projectCategory, setProjectCategory] = React.useState("");

  const [arrayOfItems, setArrayOfItems] = React.useState([]);
  const [arrayOfSteps, setArrayOfSteps] = React.useState([]);
  const [arrayOfTools, setArrayOfTools] = React.useState([]);

  const [projectItem, setProjectItem] = React.useState("");
  const [projectStep, setProjectStep] = React.useState("");
  const [projectTool, setProjectTool] = React.useState("");

  let isItems = false;
  let isSteps = false;
  let isTools = false;
  const classes = useStyles();

  console.log(
    projectTitle,
    projectCategory,
    projectItem,
    projectStep,
    projectTool
  );

  const getResponse = async () => {
    console.log("get response called");
    if (
      projectTitle !== "" &&
      projectCategory !== "" &&
      arrayOfItems !== "" &&
      arrayOfSteps !== "" &&
      arrayOfTools !== ""
    ) {
      const storyData = {
        projectTitle: projectTitle,
        projectCategory: projectCategory,
        projectItems: arrayOfItems,
        projectSteps: arrayOfSteps,
        projectTools: arrayOfTools
      };

      console.log("In if of getresponse");
      await axios
        .post("http://localhost:3000/postStory", { storyData })
        .then(response => {
          console.log(response);
          const res = response.data;
        });
    }
    console.log("Out of if");
  };

  const addItem = () => {
    if (projectItem === "") alert("Enter item");
    else {
      isItems = false;
      console.log(isItems);
      console.log("in additem");
      console.log("project item is", projectItem);
      console.log("before concat", arrayOfItems);

      let newItem = {
        text: projectItem,
        key: Date.now()
      };
      arrayOfItems.push(newItem);
      document.getElementById("project-item-input").value = "";
      setProjectItem("");
      console.log("array is", arrayOfItems);
    }
  };

  const addStep = () => {
    if (projectStep === "") alert("Enter a step");
    else {
      isSteps = false;
      let newStep = {
        text: projectStep,
        key: Date.now()
      };
      arrayOfSteps.push(newStep);
      document.getElementById("project-step-input").value = "";
      setProjectStep("");
      console.log("array is", arrayOfSteps);
    }
  };

  const addTool = () => {
    if (projectTool === "") alert("Enter a tool");
    else {
      isTools = false;
      let newTool = {
        text: projectTool,
        key: Date.now()
      };
      arrayOfTools.push(newTool);
      document.getElementById("project-tool-input").value = "";
      setProjectTool("");
      console.log("array is", arrayOfTools);
    }
  };

  // Add tasks, delete tasks and display tasks
  const createTasks = item => {
    return (
      <li
        onClick={() => {
          deleteItem(item.key);
        }}
        key={item.key}
      >
        {item.text}
      </li>
    );
  };

  const deleteItem = key => {
    let filteredItems = arrayOfItems.filter(function(item) {
      return item.key !== key;
    });
    setArrayOfItems(filteredItems);
    console.log(arrayOfItems);
  };

  let listItems = arrayOfItems.map(createTasks);

  // Add steps, delete steps and display steps
  const createSteps = item => {
    return (
      <li
        onClick={() => {
          deleteStep(item.key);
        }}
        key={item.key}
      >
        {item.text}
      </li>
    );
  };

  const deleteStep = key => {
    let filteredSteps = arrayOfSteps.filter(function(item) {
      return item.key !== key;
    });
    setArrayOfSteps(filteredSteps);
    console.log(arrayOfSteps);
  };

  let listSteps = arrayOfSteps.map(createSteps);

  // Add tools, delete tools and display tools
  const createTools = item => {
    return (
      <li
        onClick={() => {
          deleteTool(item.key);
        }}
        key={item.key}
      >
        {item.text}
      </li>
    );
  };

  const deleteTool = key => {
    let filteredTools = arrayOfTools.filter(function(item) {
      return item.key !== key;
    });
    setArrayOfTools(filteredTools);
    console.log(arrayOfSteps);
  };

  let listTools = arrayOfTools.map(createTools);

  return (
    <div className="wrapper container">
      <div className="row">
        <div className="col-12">
          <div className="align-centre">Tell us your Story...</div>
          <hr></hr>
          <div>
            <form id="formelements" className={classes.root} noValidate>
              <CssTextField
                className={classes.margin}
                id="project-title-input"
                label="Project Title"
                onChange={e => {
                  setProjectTitle(e.target.value);
                }}
              />
              <div className="inside-wrapper margin-top-20-p">
                <div className="left-margin-30-p label-font-size">
                  Project category:
                </div>
                <div>
                  <select
                    className="left-margin-40-p textarea-border"
                    onChange={e => {
                      setProjectCategory(e.target.value);
                    }}
                  >
                    <option value=""> </option>
                    <option value="Gardening">Gardening</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical Work</option>
                    <option value="Wood">Wood work</option>
                  </select>
                </div>
              </div>
              <CssTextField
                className={classes.margin}
                id="project-item-input"
                label="Project Items"
                onChange={e => {
                  setProjectItem(e.target.value);
                }}
                value={projectItem}
              />
              <Button
                id="add-button"
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={addItem}
              >
                Add Item
              </Button>

              {isItems ? (
                <div>No items added</div>
              ) : (
                <ul className="theList">{listItems}</ul>
              )}

              <CssTextField
                className={classes.margin}
                id="project-step-input"
                label="Project Steps"
                onChange={e => {
                  setProjectStep(e.target.value);
                }}
                value={projectStep}
              />
              <Button
                id="add-button"
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={addStep}
              >
              Add Step
              </Button>

              {isSteps ? (
                <div>No items added</div>
              ) : (
                <ul className="theList">{listSteps}</ul>
              )}

              <CssTextField
                className={classes.margin}
                id="project-tool-input"
                label="Project Tools"
                onChange={e => {
                  setProjectTool(e.target.value);
                }}
                value={projectTool}
              />
              <Button
                id="add-button"
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={addTool}
              >
              Add Tool
              </Button>

              {isTools ? (
                <div>No items added</div>
              ) : (
                <ul className="theList">{listTools}</ul>
              )}
              <Button
                id="submit-button"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={getResponse}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default ShareYourStory;
