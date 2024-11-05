import React, { useState, useTransition } from "react";

const TransitionHook = () => {
  let [inptValue, setInptValue] = useState("");
  let [list, setList] = useState([]);
  let [isPending, startTransition] = useTransition();

  let getInptValue = (e) => {
    setInptValue(e.target.value);

    startTransition(() => {
      let arr = [];

      for (let i = 0; i <= 20000; i++) {
        arr.push(e.target.value);
      }

      setList(arr);
    });
  };

  return (
    <div>
      <input type="text" value={inptValue} onChange={(e) => getInptValue(e)} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((e, i) => <li key={i}>{e}</li>)
      )}
    </div>
  );
};

export default TransitionHook;
