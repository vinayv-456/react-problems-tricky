import React, { useRef } from "react";
import FancyInput from "./FancyInput";

function ForwaedRefDemo() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current?.handleFocus();
  };
  return (
    <>
      <FancyInput ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}

export default ForwaedRefDemo;
