import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Carousel } from "./pages/Carousel";
import { ShareYourStory } from "./pages/ShareYourStory";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <ShareYourStory />
      </div>
    </div>
  );
}

export default App;
