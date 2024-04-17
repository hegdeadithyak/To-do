export function CreateTodo() {
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
    return (
        <div>
            <input type="text" placeholder="title"></input>
            <br></br>
            <input type="text" placeholder="description"></input>
            <br></br>
            <button onClick={handleAddTodo}>Add a Todo</button>
        </div>
    );
}

