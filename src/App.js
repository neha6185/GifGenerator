import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
import "./App.css";

function App() {
  return (
    <React.Fragment>
    <h1>Gif Genrator</h1>
    <div className="main-container">
      
      <Random />
      <Tag />
    </div>
    </React.Fragment>
  );
}

export default App;
