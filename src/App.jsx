import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodos() {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTask("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  //usestate for edit
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function editTodo(todo) {
    setEditId(todo.id);
    setEditText(todo.text);
  }

  function updateTodo(id) {
    if (!editText.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id == editId ? { ...todo, text: editText } : todo,
      ),
    );
    setEditText("");
    setEditId(null);
  }

  return (
    <div className="container">
      <div className="input-container">
      <h3>Todo App</h3>
        <div>
          <input
          type="text"
          value={editId === null ? task : editText}
          onChange={(e) => {
            editId === null
              ? setTask(e.target.value)
              : setEditText(e.target.value);
          }}
          required
        />
        {editId !== null ? (
          <button
            onClick={() => {
              updateTodo(editId);
            }}
          >
            update
          </button>
        ) : (
          <button onClick={addTodos}>Add</button>
        )}
        </div>
      </div>
      <div className="list-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>

              <div>
                <button onClick={() => editTodo(todo)}><i class="fa-solid fa-pen-to-square"></i></button>

                <button onClick={() => deleteTodo(todo.id)}><i class="fa-solid fa-trash"></i></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
