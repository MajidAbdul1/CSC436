import TodoItem from './TodoItem';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({
        title: '',
        description: '',
        complete: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewTodo({
            ...newTodo,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const addTodo = () => {
        if (newTodo.title.trim() !== '') {
            const todo = {
                ...newTodo,
                author: 'Current User', // Replace with actual username
                dateCreated: Date.now(),
                dateCompleted: null,
            };
            setTodos([...todos, todo]);
            setNewTodo({ title: '', description: '', complete: false });
        }
    };

    const toggleComplete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].complete = !updatedTodos[index].complete;
        updatedTodos[index].dateCompleted = updatedTodos[index].complete
            ? Date.now()
            : null;
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                name="title"
                value={newTodo.title}
                placeholder="Title"
                onChange={handleInputChange}
            />
            <textarea
                name="description"
                value={newTodo.description}
                placeholder="Description"
                onChange={handleInputChange}
            />
            <button onClick={addTodo}>Add Todo</button>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    {...todo}
                    onToggleComplete={() => toggleComplete(index)}
                />
            ))}
        </div>
    );
}

