export function CreateTodo() {
    function handleAddTodo() {
        fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "title",
                description: "description",
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

