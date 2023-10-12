import { v4 as uuidv4 } from 'uuid';

import React from "react";
import Todo from "./Todo";

export default function ListTodo({ todos = [] }) {
    return (
        <div>
            {todos.map((p, i) => <Todo {...p} key={uuidv4()} />)}
        </div>
    );
}
