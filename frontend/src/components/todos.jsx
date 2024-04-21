import PropTypes from 'prop-types';
import {  } from 'react-router-dom';

export function Todos({ todos }) {
    const history = useNavigate();

    const handleComplete = () => {
        history.push(`/completed`); // Redirect to the completed page
    };

    return (
        <div>
            {todos.map(function (todo, index) {
                if (!todo || !todo.title || !todo.description) {
                    console.warn('Invalid todo item:', todo);
                    return null;
                }
                console.log(todo);
                return (
                    <div key={index}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={() => handleComplete(todo.id)}>Complete</button>
                    </div>
                );
            })}
        </div>
    );

}
   
Todos.propTypes = {
    todos: PropTypes.array.isRequired
};