import React, { useReducer } from "react";

const initialState = 0;

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
