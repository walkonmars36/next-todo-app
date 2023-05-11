"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import AddTodo from "@/components/AddTodo/AddTodo";
import TodoList from "@/components/TodoList/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos([...todos, { text: todo, completed: false }]);
  }

  function handleToggleTodoCompleted(index) {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.mainContent} container`}>
        <AddTodo addTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          todoCompleted={handleToggleTodoCompleted}
          deleteTodo={handleDeleteTodo}
        />
      </main>
    </div>
  );
}
