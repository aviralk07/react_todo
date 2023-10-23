import React from "react";
import { TodoItem } from "./TodoItem";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="title-todo text-center">Todos List</h3>
      {props.todos.length === 0 ? (
        // <p className="no-todos-message">No Todos to Display!</p>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://previews.agefotostock.com/previewimage/medibigoff/2970314f095a292240f56a7574cfd335/esy-043486744.jpg"
            alt="Your Image"
          />
          <Card.Body>
            <Card.Title>Nothing is visible or presented.</Card.Title>
            <Card.Text className="no-todos-message">
              No Todos to Display!
            </Card.Text>
            <Button className="text-center" variant="success">
              No Todo
            </Button>
          </Card.Body>
        </Card>
      ) : (
        props.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        ))
      )}
    </div>
  );
};
