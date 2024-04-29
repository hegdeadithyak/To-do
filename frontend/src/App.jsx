import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodos";
import Todo from "./components/todos";
// import {todos} from

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    console.log(json);
    setTodos(json.todos);
  });

  return (
    <>
      <AddTodo></AddTodo>
      <Todo todos={todos}></Todo>
    </>
  );
}

export default App;
