import React, { useState } from "react";
import SetStateInterval from "./interval";
import SetStateTimeout from "./timeout";

export default function ClearSubscribtions() {
  const [switchComp, setSwitchComp] = useState(false);

  return (
    <>
      <button onClick={() => setSwitchComp((prev) => !prev)}>switch</button>
      {/* causes error if we donot provide unsubscriptions for timeout and interval(any async operation) */}
      {/* error = state update on unmounted component */}
      {switchComp ? <SetStateTimeout /> : <SetStateInterval />}
    </>
  );
}
