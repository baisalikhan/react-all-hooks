import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />

      <p>
        You Typed: <b>{inputValue}</b>
      </p>
    </>
  );
};

export default UseRef;
