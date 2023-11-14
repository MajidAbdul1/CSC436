import React, { useState } from 'react';

export default function Register({ onRegister }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === passwordRepeat) {
            onRegister(username);
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="register-username">Username:</label>
            <input
                type="text"
                name="register-username"
                id="register-username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />

            <label htmlFor="register-password">Password:</label>
            <input
                type="password"
                name="register-password"
                id="register-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />

            <label htmlFor="register-password-repeat">Repeat password:</label>
            <input
                type="password"
                name="register-password-repeat"
                id="register-password-repeat"
                value={passwordRepeat}
                onChange={e => setPasswordRepeat(e.target.value)}
                required
            />

            <input type="submit" value="Register" />
        </form>
    );
}
