
export default function Todo({ title, description, author, dateCreated, complete, dateCompleted, onToggleComplete }) {
    return (
        <div>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            <p>Author: {author}</p>
            <p>Created: {new Date(dateCreated).toLocaleString()}</p>
            <input
                type="checkbox"
                checked={complete}
                onChange={onToggleComplete} // Toggle the "complete" field
            />{" "}
            Complete
            {complete && (
                <p>Completed: {new Date(dateCompleted).toLocaleString()}</p>
            )}
        </div>
    );
}

