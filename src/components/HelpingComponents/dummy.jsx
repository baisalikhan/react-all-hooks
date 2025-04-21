import React, { useEffect } from "react";

const Dummy = () => {
  useEffect(() => {
    console.log("clean up function example");

    return () => {
      console.log("Rerendering on unmount");
    };
  }, []);

  return <div>Dummy Component</div>;
};

export default Dummy;
