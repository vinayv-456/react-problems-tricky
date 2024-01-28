import React, { useMemo } from "react";
import { useState } from "react";

const expensiveOperation = () => {
  console.log("performing expensive operation");
  let value = 0;
  for (let i = 0; i < 1000; i += 1) {
    value = i;
  }
  return value;
};

function Index() {
  const val = useMemo(() => {
    return expensiveOperation();
  }, []);
  const [dummyState, setDummyState] = useState(false);
  const dummyStateTrigger = () => {
    setDummyState((val) => !val);
  };
  console.log("render", val, dummyState);
  return (
    <>
      <h1>useMemo check</h1>
      <h1>{val}</h1>
      <button onClick={dummyStateTrigger}>trigger</button>
    </>
  );
}

export default Index;
