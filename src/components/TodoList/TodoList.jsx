import "./TodoList.scss";
import { useState } from "react";
import Image from "next/image";
import IconCheck from "/public/assets/images/icon-check.svg";
import IconCross from "/public/assets/images/icon-cross.svg";

const TodoList = ({ todos, filter, toggleCompleted, deleteTodo }) => {
  const filteredTodos = todos.filter((todo, index) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return false;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <ul className="todos" role="list">
      {filteredTodos.map((todo, index) => (
        <li
          className={`todos__item ${index === 0 ? "first-item" : ""} ${
            todo.completed ? "todos__item--completed" : ""
          } `}
          key={index}
        >
          <button
            className={`btn circle-btn ${todo.completed ? "btn-gradient" : ""}`}
            onClick={() => {
              toggleCompleted(index);
            }}
          >
            <Image src={IconCheck} alt="check item" />
          </button>
          {todo.text}
          <button className="btn" onClick={() => deleteTodo(index)}>
            <Image className="icon-cross" src={IconCross} alt="delete item" />
          </button>
        </li>
      ))}
      {todos.length > 0 && (
        <li className="todos__item todos__item--footer">
          {activeTodosCount > 0 &&
            (filter === "all" || filter === "active") && (
              <span className="todos__count">
                {activeTodosCount} item(s) left
              </span>
            )}

          {todos.some((todo) => todo.completed) && filter !== "active" && (
            <button className="btn todos__clear-btn">Clear Completed</button>
          )}
        </li>
      )}
    </ul>
  );
};

export default TodoList;
