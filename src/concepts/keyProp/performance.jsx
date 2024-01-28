import React, { useState } from "react";
import { useEffect } from "react";

const Item = ({ item }) => {
  const { id, label } = item;
  const [prevVal, setPrevVal] = useState();
  useEffect(() => {
    console.log("prev val", prevVal, item);
    setPrevVal(item);
  }, [item]);
  return <div>{label}</div>;
};

function Performance() {
  const [list, setList] = useState([]);
  const generateItem = () => {
    const id = Math.trunc(Math.random() * 1000).toString();
    return {
      id,
      label: `item #${id}`,
    };
  };
  const addToBottom = () => {
    setList([...list, generateItem()]);
  };
  const addToTop = () => {
    setList([generateItem(), ...list]);
  };
  return (
    <>
      <h1>React keys/performance</h1>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <button onClick={addToBottom}>add to bottom</button>
      <button onClick={addToTop}>add to top</button>
    </>
  );
}

export default Performance;
