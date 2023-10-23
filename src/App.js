import "./App.css";
import { Footer } from "./My Components/Footer";
import Header from "./My Components/Header";
import React, { useState } from "react";
import { Todos } from "./My Components/Todos";
function App() {
  const onDelete = (todo) => {
    console.log("i am on delete of todo ", todo);
    // deleting this way in react does not work
    // let index = todo.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done2",
    },
    {
      sno: 3,
      title: "Go to the street",
      desc: "You need to go to the street to get this job done3",
    },
  ]);
  return (
    <>
      {/* <div>{}</div>  bracets me this is my javascript   */}
      <Header title="My Todos List" searchBar={true} />

      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
