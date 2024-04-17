import PropTypes from 'prop-types';

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

export function Todos({ todos }) {
    return <div>
        {todos.map(function (todo, index) {
            return (
                <div key={index}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    {/* <button onClick={completeTodo}>Complete</button> */}
                </div>
            );
        })}
    </div>
}

// function completeTodo({todo}){
//     if(todo.complete == false){
//         todo.complete = true;
//     }
// }
