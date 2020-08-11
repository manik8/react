import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/*<Greet name="manik" heroName="batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="mannat" heroName="supergirl">
        <button>Mannat</button>
      </Greet>
      <Greet name="natik" heroName="superman" />
      <Welcome name="manik" heroName="batman" />*/}
    </div>
  );
}

export default App;
