import React from "react";
import Beach from "./images/beachBackground.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Beach} className="header-image" alt="beach" />
        Aylin's Lashes Coming Soon!
      </header>
    </div>
  );
}

export default App;
