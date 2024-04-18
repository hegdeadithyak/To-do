async function completeTodo({ todo }) {
    const response = await fetch("http://localhost:5000/completed", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: todo,
        }),
    });
    const data = await response.json();
    console.log(data);
}

export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo, index) {
                return (
                    <div key={index}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={() => completeTodo({ todo })}>Complete</button>
                    </div>
                );
            })}
        </div>
    );
}

// function completeTodo({todo}){
//     if(todo.complete == false){
//         todo.complete = true;
//     }
// }
