//import { v4 as uuidv4 } from 'uuid';

import React from "react";
import Todo from "./Todo";

export default function ListTodo({ todos, dispatchTodos }) {
    return (
        <div>
            {todos.map(todo => <Todo key={todo.title} todo={todo} dispatchTodos={dispatchTodos} />)}
        </div>
    );
}
