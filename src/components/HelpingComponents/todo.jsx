import React, { useOptimistic, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [optimisticTodos, setOptimisticTodos] = useOptimistic(
    todos,
    (oldTodos, newTodo) => [...oldTodos, { text: newTodo, pending: true }]
  );

  const handleAddTodo = async (formdata) => {
    const newTodo = formdata.get("todo");

    setOptimisticTodos(newTodo);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, pending: false },
    ]);
  };
  return (
    <>
      <form action={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter todo..." />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index}>
            {todo.text} {todo.pending && <span>(Adding...)</span>}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
