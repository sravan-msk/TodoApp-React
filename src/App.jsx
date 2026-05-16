import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");

  // Load todos only once
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Auto-save whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask("");
  }

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;