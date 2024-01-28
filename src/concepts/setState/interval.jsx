import React, { useEffect, useState } from "react";

function SetStateInterval() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      // wrong
      // setCount(count + 1);
      // correct
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("unmounted-interval");
      clearInterval(timer);
    };
  }, []);

  return <div>{count}</div>;
}

export default SetStateInterval;
