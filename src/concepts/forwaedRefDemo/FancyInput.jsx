import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function FancyInput(props, inputRef) {
  const [val, setVal] = useState();
  const editInputRef = useRef();
  useImperativeHandle(inputRef, () => ({
    handleFocus: () => {
      editInputRef.current?.focus();
    },
  }));
  return (
    <input
      ref={editInputRef}
      type="text"
      value={val}
      onChange={(e) => {
        setVal(e.target?.value);
      }}
    />
  );
}

export default forwardRef(FancyInput);
