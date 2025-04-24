import React, { useImperativeHandle, useRef, useState } from "react";

const FancyInput = ({ ref }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = ""),
  }));

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />

      <p>You Typed: {inputValue}</p>
    </div>
  );
};

export default FancyInput;
