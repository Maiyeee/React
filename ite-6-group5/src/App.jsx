import React from "react";
import "./App.css";
import Activity1 from "./components/Activity1/Activity1";
import Activity2 from "./components/Activity2/Activity2";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-section">
        <h2>Activity 1</h2>
        <Activity1 />
      </div>

      <div className="app-section">
        <h2>Activity 2</h2>
        <Activity2 />
      </div>
    </div>
  );
}

export default App;