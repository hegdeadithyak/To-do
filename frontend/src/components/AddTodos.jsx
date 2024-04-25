function AddTodo(){

    function handleAddTodo() {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: document.querySelector("input[placeholder='title']").value,
                description: document.querySelector("input[placeholder='description']").value,
            }),
        });
    }
    return <>
        <input type="text" placeholder="Title"></input>
        <br></br>
        <br></br>
        <input type="text" placeholder="Description"></input>
        <br></br>
        <br></br>
        <button onClick={handleAddTodo}>Add Todo</button>
    </>
}

export default AddTodo;