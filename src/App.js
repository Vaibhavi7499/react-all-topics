import React from "react";
import "./App.scss";
import Counter from "./Counter/Counter";
import Hover from "./Hover/Hover";
import TransitionHook from "./React 18 Hooks/TransitionHook";
import DefferedValueHook from "./React 18 Hooks/DefferedValueHook";
import Debounc from "./Debouncing/Debounc";
const App = () => {
  return (
    <div>
      {/* <Counter />
      <Hover /> */}
      {/* <TransitionHook/> */}
      {/* <DefferedValueHook/> */}
      <Debounc />
    </div>
  );
};

export default App;
