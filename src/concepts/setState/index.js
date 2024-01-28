import React from "react";
import SetStateInterval from "./interval";
import SetStateTimeout from "./timeout";
import ClearSubscribtions from "./clearSubscribtions";

function StateUpdationConcepts() {
  return (
    <>
      <div>=========Interval Implementation==========</div>
      <SetStateInterval />
      <div>========updating state in Timeout callback===========</div>
      <SetStateTimeout />
      <div>===============Clear ClearSubscribtions=============</div>
      <ClearSubscribtions />
    </>
  );
}

export default StateUpdationConcepts;
