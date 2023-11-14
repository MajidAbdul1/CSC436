export default function Logout({ user, onLogout }) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onLogout();
        }}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout" />
        </form>
    );
}

