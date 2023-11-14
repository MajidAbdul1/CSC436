import React, { useReducer } from 'react';
import { userReducer } from './userReducer';
import { todoReducer } from './todoReducer';
import UserBar from "./UserBar";
import TodoForm from "./TodoForm";
import ListTodo from "./ListTodo";
import './style.css';

function App() {
  const [userState, dispatchUser] = useReducer(userReducer, { user: null });
  const [todos, dispatchTodos] = useReducer(todoReducer, []);

  return (
    <div className="container">
      <UserBar user={userState.user} dispatchUser={dispatchUser} />
      {userState.user && <TodoForm user={userState.user} dispatchTodos={dispatchTodos} />}
      <ListTodo todos={todos} dispatchTodos={dispatchTodos} />
    </div>
  );
}

export default App;
