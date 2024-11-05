import React from "react";
import HOC from "../HOC";

const Counter = ({ counter, incCounter }) => {
  return (
    <div>
      <h1>Counter increase {counter} times</h1>
      <button onClick={incCounter}>Increase</button>
    </div>
  );
};

export default HOC(Counter);
