import "./TodoList.scss";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import Image from "next/image";
import IconCheck from "/public/assets/images/icon-check.svg";
import IconCross from "/public/assets/images/icon-cross.svg";

const TodoList = ({
  todos,
  filter,
  toggleCompleted,
  deleteTodo,
  clearCompleted,
}) => {
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

  const showFooter =
    (activeTodosCount > 0 && filter === "all") ||
    filter === "active" ||
    todos.some((todo) => todo.completed);

  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <DragDropContext>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todos"
              role="list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTodos.map((todo, index) => (
                <li
                  className={`todos__item ${index === 0 ? "first-item" : ""} ${
                    todo.completed ? "todos__item--completed" : ""
                  } `}
                  key={index}
                >
                  <button
                    className={`btn circle-btn ${
                      todo.completed ? "gradient" : ""
                    }`}
                    onClick={() => {
                      toggleCompleted(index);
                    }}
                  >
                    <Image src={IconCheck} alt="check item" />
                  </button>
                  {todo.text}
                  <button
                    className="btn todos__item-delete"
                    onClick={() => deleteTodo(index)}
                  >
                    <Image
                      className="icon-cross"
                      src={IconCross}
                      alt="delete item"
                    />
                  </button>
                </li>
              ))}
              {showFooter && (
                <li className="todos__item todos__item-footer">
                  {filter !== "completed" && (
                    <span className="todos__item-footer-text">
                      {activeTodosCount} item(s) left
                    </span>
                  )}
                  {filter === "completed" && (
                    <span className="todos__item-footer-text">
                      {completedTodosCount} item(s) completed
                    </span>
                  )}
                  {todos.some((todo) => todo.completed) &&
                    filter !== "active" && (
                      <button
                        onClick={clearCompleted}
                        className="btn todos__clear-btn todos__item-footer-text"
                      >
                        Clear Completed
                      </button>
                    )}
                </li>
              )}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {filter === "completed" && !todos.some((todo) => todo.completed) && (
        <div className="no-completed-message">
          Nothing completed yet, go and finish one of your tasks!
        </div>
      )}
    </>
  );
};

export default TodoList;
