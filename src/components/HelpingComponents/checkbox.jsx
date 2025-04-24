import React, { useId } from "react";

const Checkbox = () => {
  const id = useId();

  return (
    <>
      <div>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>Click the Checkbox to see the magic</label>
      </div>
    </>
  );
};

export default Checkbox;
