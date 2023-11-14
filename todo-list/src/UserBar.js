import React from 'react';
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar({ user, dispatchUser }) {
    const handleLogin = (username) => {
        dispatchUser({ type: 'LOGIN', username });
    };

    const handleRegister = (username) => {
        dispatchUser({ type: 'REGISTER', username });
    };

    const handleLogout = () => {
        dispatchUser({ type: 'LOGOUT' });
    };

    if (user) {
        return <Logout user={user} onLogout={handleLogout} />;
    } else {
        return (
            <>
                <Login onLogin={handleLogin} />
                <Register onRegister={handleRegister} />
            </>
        );
    }
}