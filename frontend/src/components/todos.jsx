import PropTypes from 'prop-types';
function Todo({todos}){
    function complete(todo){
        fetch("http://localhost:3000/complete",{
            method :"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : todo._id
            }
            )
        })
    }
    return <>
        {
            todos.map(function(todo,index){
                if (!todo || !todo.title || !todo.description) {
                    console.warn('Invalid todo item:', todo);
                    return null;
                }
                // console.log(todo._id);
                return (<div key ={index}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={()=>complete(todo)}>Mark as Complete</button>
                </div>)
            })
        }
    </>
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todo;