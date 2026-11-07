
import React, { useMemo } from "react";

function UseMemo({ todos }) {
  const totalTodos = useMemo(() => {
    console.log("Calculating total todos");
    return todos.length;
  }, [todos]);

  return (
    <h3>Total Todos: {totalTodos}</h3>
  );
}

export default UseMemo;
