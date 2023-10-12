import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListTodo from "./ListTodo.js";

export default function TodoForm() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (title.trim()) {
            setTodos([
                ...todos,
                { id: uuidv4(), title, completed: false },
            ]);
            setTitle("");
        }
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ListTodo todos={todos} />
        </div>
    );
}