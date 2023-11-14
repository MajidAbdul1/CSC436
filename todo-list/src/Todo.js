import React from 'react';

export default function Todo({ todo, dispatchTodos }) {
    return (

        <div className="todo-item">
            <h3>{todo.title}</h3>
            <div>{todo.description}</div>
            <br />
            <i>Written by <b>{todo.author}</b> on {new Date(todo.dateCreated).toDateString()}</i><br />
            <label>
                Completed:
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => dispatchTodos({ type: 'TOGGLE_TODO', payload: { title: todo.title } })}
                />
            </label>
            {todo.complete && <div>Completed on: {new Date(todo.dateCompleted).toDateString()}</div>}
            <button onClick={() => dispatchTodos({ type: 'DELETE_TODO', payload: { title: todo.title } })}>Delete</button>
        </div>
    );
}
