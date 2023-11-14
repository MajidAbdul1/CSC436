import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(e) => { e.preventDefault(); onLogin(username); }}>
            <label htmlFor="login-username">Username:</label>
            <input
                type="text"
                name="login-username"
                id="login-username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor="login-password">Password:</label>
            <input
                type="password"
                name="login-password"
                id="login-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" value="Login" />
        </form>
    );
}
