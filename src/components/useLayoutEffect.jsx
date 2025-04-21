import React, { useLayoutEffect, useState } from "react";

/*
useLayoutEffect Purpose: 
    Like useEffect, but fires synchronously after DOM mutations. 
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
