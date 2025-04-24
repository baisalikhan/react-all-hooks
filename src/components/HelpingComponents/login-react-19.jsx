import React, { useActionState } from "react";
import { loginUser } from "../../api/user";
import SubmitBtn from "./custom-btn";

const Login = () => {
  const [user, submitAction] = useActionState(login, {
    data: null,
    error: null,
  });

  // const handleSubmit = async (e) => {
  async function login(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await loginUser(username, password);
      return {
        data: response.data,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: error.error,
      };
    }
  }

  return (
    <form action={submitAction}>
      <div>
        <label>Username: </label>
        <input type="text" id="username" name="username" />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
      </div>
      {/* <button type="submit" disabled={isPending}>
        {isPending ? "Loading..." : "Login"}
      </button> */}

      <SubmitBtn />

      {user.data && (
        <h3 style={{ color: "green" }}>User details: {user.data.email}</h3>
      )}
      {user.error && <h3 style={{ color: "red" }}>Error: {user.error}</h3>}
    </form>
  );
};

export default Login;
