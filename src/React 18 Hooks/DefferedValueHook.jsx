import React, { useDeferredValue, useState } from "react";

const DefferedValueHook = () => {
  let [inptValue, setInptValue] = useState("");
  let [list, setList] = useState([]);
  let differedList = useDeferredValue(list);

  let getInptValue = (e) => {
    setInptValue(e.target.value);

    let arr = [];
    for (let i = 0; i <= 20000; i++) {
      arr.push(e.target.value);
    }
    setList(arr);
  };

  return (
    <div>
      <input type="text" value={inptValue} onChange={(e) => getInptValue(e)} />
      {differedList.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </div>
  );
};

export default DefferedValueHook;
