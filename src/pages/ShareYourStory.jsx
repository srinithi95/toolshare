import React from "react";
import "./shareyourstory.css";
import axios from "axios";

const ShareYourStory = () => {
  const [postingTitle, setPostingTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tools, setTools] = React.useState("");
  const [materials, setMaterials] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [tag, setTag] = React.useState("");

  const handleSubmit = () => {
    console.log("In handle submit");
    const storyData = {
      postingTitle,
      description,
      tools,
      materials,
      category,
      tag
    };

    console.log("storydata is", storyData);
    axios
      .post("http://localhost:3000/postStory", { storyData })
      .then(response => {
        console.log(response);
        const res = response.data;
        alert("Story uploaded");
      });
  };

  return (
    <div className="wrapper container">
      <div className="align-centre1 inside-wrapper">
        <div className="font-size-20">
          <b> Post your story !!! </b>{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Posting title </div>
        <div>
          {" "}
          <input
            type="text"
            onChange={e => {
              setPostingTitle(e.target.value);
            }}
          />{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Description </div>
        <div>
          {" "}
          <textarea
            type="text"
            onChange={e => {
              setDescription(e.target.value);
            }}
          />{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Tools </div>
        <div>
          {" "}
          <input
            type="text"
            onChange={e => {
              setTools(e.target.value);
            }}
          />{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Material </div>
        <div>
          {" "}
          <input
            type="text"
            onChange={e => {
              setMaterials(e.target.value);
            }}
          />{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Category </div>
        <div>
          {" "}
          <input
            type="text"
            onChange={e => {
              setCategory(e.target.value);
            }}
          />{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Tag </div>
        <div>
          {" "}
          <input
            type="text"
            onChange={e => {
              setTag(e.target.value);
            }}
          />{" "}
        </div>
      </div>
      <div className="align-centre1 inside-wrapper">
        <div className="font-size-20">
          {" "}
          {/* <b> Steps </b>{" "} */}
        </div>
      </div>
      <div className="align-centre1 inside-wrapper">
        <div>
          <button onClick={handleSubmit}> Submit </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ShareYourStory;
