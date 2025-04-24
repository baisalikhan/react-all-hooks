import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  const incrementState = () => {
    setCount(count + 1);
  };

  const incrementRef = () => {
    refCount.current = refCount.current + 1;
    console.log("Ref Count", refCount.current);
  };

  useEffect(() => {
    // check if the ref is not null
    // then focus on the input field when the component mounts/re-renders
    inputRef.current && inputRef.current.focus();
  }, []);
  return (
    <>
      {/* example # 01 */}
      <div>
        <h1>Example # 01: UseRef vs useState</h1>
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
      </div>

      {/* example # 01 */}
      <div>
        <h1>Example # 02: UseRef vs useState</h1>

        <div>
          <h3>useState</h3>
          <p>State Count: {count}</p>
          <button onClick={incrementState}>Increment</button>
        </div>

        <div>
          <h3>useRef</h3>
          <p>Ref Count: {refCount.current}</p>
          <button onClick={incrementRef}>Increment</button>
        </div>
      </div>
    </>
  );
};

export default UseRef;
