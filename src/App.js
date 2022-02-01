
import './App.css';
import Chat from "./components/Chat";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h3>VOCO</h3>
          <div>
              <Chat/>
          </div>
      </header>
    </div>
  );
}

export default App;
