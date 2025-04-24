import React, { useLayoutEffect, useState } from "react";

/*
useLayoutEffect Purpose: 
    1. Like useEffect, but fires synchronously after DOM mutations.
    2. useLayoutEffect runs synchronously after all DOM mutations 
        but before the browser updates the screen, making it suitable 
        for tasks that require immediate DOM measurements or mutations.
Example: 
    Measure DOM size before paint. 
    useLayoutEffect(() => {
         const width = boxRef.current.offsetWidth; 
         }, []);
*/

const UseLayoutEffect = () => {
  const [value, setValue] = useState("GFG");

  useLayoutEffect(() => {
    console.log("UseLayoutEffect is called with the value of ", value);
  }, [value]);
  setTimeout(() => {
    setValue("GeeksForGeeks");
  }, 2000);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "green" }}>{value}</h1> is the greatest portal for
      geeks!
    </div>
  );
};

export default UseLayoutEffect;
