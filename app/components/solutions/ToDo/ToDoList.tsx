"use client";
import React, { useState } from "react";
import InputTodo from "./InputTodo";
import TodoListItem from "./TodoListItem";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    // if there is not a new todo, then do nothing
    if (!todoText) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: todoText,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    // clear input after adding
    setTodoText("");
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>To Do List</h1>
      <InputTodo
        handleAddTodo={handleAddTodo}
        todoText={todoText}
        setTodoText={setTodoText}
      />
      <div className="flex flex-col gap-2">
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={() => handleDeleteTodo(todo.id)}
              handleToggleCompleted={() => handleToggleCompleted(todo.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
