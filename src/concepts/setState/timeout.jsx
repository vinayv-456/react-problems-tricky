import React, { useEffect, useRef, useState } from "react";
// import { useTimeout } from "rsuite/esm/utils";

export default function SetStateTimeout() {
  const [count, setCount] = useState(0);

  const handleImmUpdate = () => {
    // It will work but wrong method
    // setCount(count+1)
    // correct
    setCount((prev) => prev + 1);
  };

  const timer = useRef(null);
  const handleAsyncUpdate = () => {
    timer.current = setTimeout(() => {
      // wrong
      setCount(count + 1);
      // correct wasy
      // setCount((prev) => prev + 1);
      console.log("timer completed");
    }, [3000]);
  };

  useEffect(() => {
    return () => {
      console.log("unmounting- timer");
      clearTimeout(timer.current);
    };
  }, []);
  return (
    <>
      <p>count:{count}</p>
      <button onClick={handleImmUpdate}>immediate update</button>
      <button onClick={handleAsyncUpdate}>Async update</button>
    </>
  );
}
