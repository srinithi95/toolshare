import React from "react";
import "./toolposting.css";
import axios from "axios";

const ToolPosting = () => {
  const [toolName, setToolName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [availability, setAvailability] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [make, setMake] = React.useState("");
  const [condition, setCondition] = React.useState("");
  const [modelName, setModelName] = React.useState("");
  const [suggestedProject, setSuggestedProject] = React.useState("");

  const [email,setEmail] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");


  const handleSubmit = () => {
    console.log("in handle submit");
    const toolData = {
      toolName, price, availability, description, make, condition, modelName, suggestedProject, email,
      contactNumber, contactName, address, city, state, zipcode
    }

    console.log("storydata is", toolData);
    axios
      .post("http://localhost:3000/postTool", { toolData })
      .then(response => {
        console.log(response);
        const res = response.data;
        alert("Tool uploaded");
      });
  }

  return (
    <div className="wrapper container">
      <div className="align-centre1 inside-wrapper">
        <div className="font-size-20">
          <b> Share your tool </b>{" "}
        </div>
      </div>
      {/* Basic details */}
      <div className="inside-wrapper">
        <div className="width-200px"> Tool name </div>
        <div>
          <input type="text" onChange={e => {setToolName(e.target.value); }}/>{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Price </div>
        <div>
          {" "}
          <input type="text" onChange={e => {setPrice(e.target.value); }}/>{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Availability </div>
        <div>
          {" "}
          <input type="text" onChange={e => {setAvailability(e.target.value); }}/>{" "}
        </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Description </div>
        <div> <textarea type="text" onChange={e => {setDescription(e.target.value); }}/> </div>
      </div>

      {/* Tool details */}
      <div className="align-centre1 inside-wrapper">
        <div className="font-size-20">
          <b> Details </b>{" "}
        </div>
      </div>

      <div className="inside-wrapper">
        <div className="width-200px"> Make/Manufacturer </div>
        <div> <input type="text" onChange={e => {setMake(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Condition </div>
        <div> <input type="text" onChange={e => {setCondition(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Model Name </div>
        <div> <input type="text" onChange={e => {setModelName(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Suggested Project </div>
        <div> <input type="text" onChange={e => {setSuggestedProject(e.target.value); }}/> </div>
      </div>

      {/* Contact Details */}
      <div className="align-centre1 inside-wrapper">
        <div className="font-size-20">
          <b> Contact Details </b>{" "}
        </div>
      </div>

      <div className="inside-wrapper">
        <div className="width-200px"> Email </div>
        <div> <input type="text" onChange={e => {setEmail(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Contact Number </div>
        <div> <input type="text" onChange={e => {setContactNumber(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Contact Name </div>
        <div> <input type="text" onChange={e => {setContactName(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Address </div>
        <div> <input type="text" onChange={e => {setAddress(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> City </div>
        <div> <input type="text" onChange={e => {setCity(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> State </div>
        <div> <input type="text" onChange={e => {setState(e.target.value); }}/> </div>
      </div>
      <div className="inside-wrapper">
        <div className="width-200px"> Zipcode </div>
        <div> <input type="text" onChange={e => {setZipcode(e.target.value); }}/> </div>
      </div>

      {/* Submit Button */}
      <div className="align-centre1 inside-wrapper">
        <div>
          <button onClick={handleSubmit}> Submit </button>
        </div>
      </div>
    </div>
  );
};

export default ToolPosting;
