import { useState } from "react";

import UserBar from "./UserBar";
import Todo from "./Todo";
import ListTodo from "./ListTodo.js";

function App() {

  const [user, setUser] = useState("");

  const todos = [
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
  ]
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <Todo user={setUser} />
      <ListTodo todos={todos} />
    </div>
  );
}

export default App;
