
import React, { useState, useEffect } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("App component rendered");
  });

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const addCustomTodo = () => {
    if (task.trim().length > 5) {
      setTodos([...todos, task]);
      setTask("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  return (
    <div>
      <h1>Task Management App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br /><br />

      <button onClick={addTodo}>Add Todo</button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addCustomTodo}>Submit</button>

      <h2>Todos</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <UseMemo todos={todos} />

      <ReactMemo count={count} />
    </div>
  );
}

export default App;
