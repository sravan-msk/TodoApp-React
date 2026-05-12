import React from "react";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodos() {
    // if (task.trim()) return;
    const newTodos = {
      id: Date.now(),
      todo: task,
      completed: false,
    };
    setTodos({ ...todos, newTodos });
    console.log(todos);
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
    </div>
  );
}

export default App;
