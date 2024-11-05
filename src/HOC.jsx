import { useState } from "react";

const HOC = (ObjectComp) => {
  const NewComponent = () => {

    let [counter,setCounter] = useState(0);

    let incCounter=()=>{
setCounter(prevcount => prevcount + 1)
    }

    return <ObjectComp counter={counter} incCounter={incCounter} />;
  };

  return NewComponent;
};

export default HOC;
