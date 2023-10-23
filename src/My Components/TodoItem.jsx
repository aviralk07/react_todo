import React from "react";
import Button from "react-bootstrap/Button";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <Button
        onClick={() => {
          onDelete(todo);
        }}
        variant="danger"
        size="sm"
      >
        Delete
      </Button>
    </div>
  );
};

// TodoItem.js
