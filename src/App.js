import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/*<FunctionClick />
      <ClassClick />
      /*<Greet name="manik" heroName="batman">
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
