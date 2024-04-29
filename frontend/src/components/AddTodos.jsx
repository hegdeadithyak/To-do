import { useState } from "react";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTodo() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
}

export default AddTodo;
