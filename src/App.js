import React from "react";
import Gift from "./Components/NestedGift/Gift";
import AsyncHandling from "./JS/AsyncFlowExample_OrderPizza";
import TabList from "./Components/Tab/TabList";
import SetState from "./concepts/setState";
import KeyConcepts from "./concepts/keyConcepts";

function App() {
  return (
    <div
      style={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "space-evenly",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* TODO: add routing and add index page */}
      {/* <Gift /> */}
      {/* <AsyncHandling /> */}
      {/* <TabList /> */}
      {/* <SetState /> */}
      <KeyConcepts />
    </div>
  );
}

export default App;
