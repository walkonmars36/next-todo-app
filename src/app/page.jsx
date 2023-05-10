"use client";

import { useState } from "react";
import styles from "./page.module.css";
import AddTodo from "@/components/AddTodo/AddTodo";
import TodoList from "@/components/TodoList/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1 className={styles.title}>Todo</h1>
      <AddTodo addTodo={handleAddTodo} />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
    </div>
  );
}
