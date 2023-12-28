import React from "react";
import Gift from "./NestedGift/Gift";
import AsyncHandling from "./JS/AsyncFlowExample_OrderPizza";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <Gift /> */}
      <AsyncHandling />
    </div>
  );
}

export default App;
