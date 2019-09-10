import React from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      Hallo Spieler! Nenne deinen Namen,
      <input type="text" placeholder="Name"></input>
      <Game />
    </div>
  );
}

export default App;
