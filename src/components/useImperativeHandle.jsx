import React, { useRef } from "react";
import FancyInput from "./HelpingComponents/fancy-input";

const UseImperativeHandle = () => {
  const fancyInputRef = useRef(null);
  return (
    <div>
      <FancyInput ref={fancyInputRef} />

      <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
      <button onClick={() => fancyInputRef.current.clear()}>Clear</button>
    </div>
  );
};

export default UseImperativeHandle;
