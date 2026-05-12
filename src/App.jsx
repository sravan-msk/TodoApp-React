import React from "react";
import Card from "./componets/Card";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodos() {
    // if (task) return;
    const newTodos = {
      id: Date.now(),
      todo: task,
      completed: false,
    };
    setTodos((todo) => [...todo, newTodos]);
    setTask("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo.."
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={addTodos}>Add</button>

      {todos.map((todo, idx) => {
        return (
          <div key={todo.id}>
            <p>{todo.todo}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
