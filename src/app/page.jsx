"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import AddTodo from "@/components/AddTodo/AddTodo";
import TodoList from "@/components/TodoList/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  // move these to TodoList.jsx and AddTodo.jsx
  const [AddButtonClicked, setAddButtonClicked] = useState(false);
  const [todoButtonClicked, setTodoButtonClicked] = useState(false);

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  // move these to TodoList.jsx and AddTodo.jsx
  function handleAddButtonClicked() {
    setAddButtonClicked(!AddButtonClicked);
  }

  function handleTodoButtonClicked() {
    setTodoButtonClicked(!todoButtonClicked);
  }

  return (
    <>
      <Header />
      <main className="main-content container">
        <AddTodo
          addTodo={handleAddTodo}
          buttonClicked={AddButtonClicked}
          handleButtonClicked={handleAddButtonClicked}
        />
        <TodoList
          todos={todos}
          deleteTodo={handleDeleteTodo}
          buttonClicked={todoButtonClicked}
          handleButtonClicked={handleTodoButtonClicked}
        />
      </main>
    </>
  );
}
