import PropTypes from 'prop-types';
function Todo({todos}){
    return <>
        {
            todos.map(function(todo,index){
                if (!todo || !todo.title || !todo.description) {
                    console.warn('Invalid todo item:', todo);
                    return null;
                }
                console.log(todo)
                return (<div key ={index}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>Mark as Complete</button>
                </div>)
            })
        }
    </>
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Todo;