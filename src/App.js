import React from "react";
import Gift from "./NestedGift/Gift";

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
      <Gift />
    </div>
  );
}

export default App;
