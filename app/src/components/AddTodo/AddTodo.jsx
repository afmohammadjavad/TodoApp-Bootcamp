import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div className="add-todo">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="type here"
        style={{background: '#EFEFEF' ,padding: 7 ,marginRight: 10, border: 0}}
      />
      <button
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
        style={{padding: 5, cursor: "pointer"}}
        disabled={title === "" ? true : false}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
