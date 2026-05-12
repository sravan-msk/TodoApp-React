import React from "react";
import { useState, useEffect } from "react";

function Card() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Going to college",
      completed: false,
    },
  ]);

  useEffect(() => {
    const newTask = {
      id: 2,
      todo: "This new Todo",
      completed: false,
    };
    setTodos((prev) => [...prev, newTask]);
  }, []);

  console.log(todos);

  return (
    <div>
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

export default Card;
