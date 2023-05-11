"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import AddTodo from "@/components/AddTodo/AddTodo";
import TodoList from "@/components/TodoList/TodoList";
import TodoFilter from "@/components/TodoFilter/TodoFilter";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

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

  function handleFilterChange(filter) {
    setFilter(filter);
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.mainContent} container`}>
        <AddTodo addTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          filter={filter}
          toggleCompleted={handleToggleTodoCompleted}
          deleteTodo={handleDeleteTodo}
        />
        <TodoFilter
          currentFilter={filter}
          onFilterChange={handleFilterChange}
        />
      </main>
    </div>
  );
}
