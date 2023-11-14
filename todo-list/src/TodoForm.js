import React, { useState } from 'react';
export default function TodoForm({ user, dispatchTodos }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTodos({

            type: 'CREATE_TODO',
            payload: {
                title,
                description,
                author: user,
                dateCreated: Date.now(),
                complete: false,
                dateCompleted: null
            }
        });
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="create-description">Description:</label>
                <textarea name="create-description" id="create-description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <input type="submit" value="Add Todo" />
        </form>
    );
}