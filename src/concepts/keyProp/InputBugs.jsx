import React, { useEffect, useState } from "react";

const Item = ({ item, onDelete }) => {
  const { id, label } = item;
  const [prevVal, setPrevVal] = useState();
  useEffect(() => {
    console.log("prev val", prevVal, item);
    setPrevVal(item);
  }, [item]);

  console.log("item", item);
  return (
    <div>
      <input defaultValue={label} type="text"></input>
      <button onClick={() => onDelete(id)}>cancel</button>
    </div>
  );
};

function InputBugs() {
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
  const onDelete = (id) => {
    setList(list.filter((i) => i.id !== id));
  };

  return (
    <>
      <h1>React keys/performance</h1>
      {/* The issue with keys in this example is that if you don't re-create DOM elements because of incorrect React keys, 
      these elements can keep user input, when underlying data was changed. */}
      {/* inner state got unsynchronized with DOM state, because inner models shifted as in the first example, 
       but view stayed the same. */}
      {list.map((item, index) => (
        <Item
          // key={item.id}
          key={index}
          item={item}
          onDelete={onDelete}
        />
      ))}
      <div>
        <button onClick={addToBottom}>add to bottom</button>
        <button onClick={addToTop}>add to top</button>
      </div>
    </>
  );
}

export default InputBugs;
