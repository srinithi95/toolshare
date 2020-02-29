import React from "react";
import "./storydetails.css";

const StoryDetails = propStory => {
  console.log("in story details component", propStory);
  return (
    <div className="story-wrapper">
      <div>
        <b>{propStory.story.posting_title}</b>
      </div>
      <div>
        <i>{propStory.story.description}</i>
      </div>
      <div className="story-inside-wrapper">
        <span className="margin-20px width-100px">Tools required:</span>
        <span className="margin-20px width-100px">{propStory.story.tool}</span>
      </div>
      <div>
        <span className="margin-20px width-100px">Materials:</span>
        <span className="margin-20px width-100px">{propStory.story.material}</span>
      </div>
    </div>
  );
};

export default StoryDetails;
