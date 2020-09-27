import React from "react";
import Todo from "./Todo";
const Todolist = ({ todos, setTodos, todo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
export default Todolist;
