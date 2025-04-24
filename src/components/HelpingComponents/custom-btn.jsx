import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return <button type="submit">{pending ? "Loading..." : "Login"}</button>;
};

export default SubmitBtn;
