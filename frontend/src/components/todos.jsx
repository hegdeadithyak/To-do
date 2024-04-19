import fs from "fs";


async function completeTodo({ todo }) {
    fs.readFile("http://localhost:3000/completed", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        const obj = JSON.parse(data);
        obj.complete = true;
        fs.writeFile("http://localhost:3000/completed", JSON.stringify(obj), "utf8", function (err) {
            if (err) {
                console.log(err);
            }
        });
        
    });
}

export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo, index) {
                console.log(todo)
                return (
                    <div key={index}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={completeTodo(todo)}>Complete</button>
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
