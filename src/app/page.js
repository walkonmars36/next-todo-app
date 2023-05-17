"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  function handleAddTodo(todo) {
    setTodos([...todos, { id: Date.now(), text: todo, status: "active" }]);
  }

  function handleToggleTodoCompleted(index) {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            status: todo.status === "active" ? "completed" : "active",
          };
        }
        return todo;
      })
    );
  }

  function handleFilterChange(filter) {
    setFilter(filter);
  }

  function handleClearCompleted() {
    const newTodos = todos.map((todo) => {
      if (todo.status === "completed") {
        return { ...todo, status: "hidden" };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function handleDeleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <div className={styles.page}>
      <Header />
      <main className={`${styles.mainContent} container`}>
        <AddTodo addTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filter={filter}
          toggleCompleted={handleToggleTodoCompleted}
          deleteTodo={handleDeleteTodo}
          clearCompleted={handleClearCompleted}
        />
        <TodoFilter
          todos={todos}
          currentFilter={filter}
          onFilterChange={handleFilterChange}
        />
      </main>
    </div>
  );
}
