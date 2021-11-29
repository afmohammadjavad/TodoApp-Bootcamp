import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Content.css";
import AddTodo from "../AddTodo";
import Todos from "../Todos/Todos";

function Content() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title) => {
    const updatedTodos = [
      ...todos,
      { id: uuid(), title: title, completed: false },
    ];
    setTodos(updatedTodos);
  };

  return (
    <div className="content">
      <AddTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Content;
