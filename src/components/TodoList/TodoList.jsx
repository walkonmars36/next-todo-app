import "./TodoList.scss";
import { useState } from "react";
import Image from "next/image";
import IconCheck from "/public/assets/images/icon-check.svg";
import IconCross from "/public/assets/images/icon-cross.svg";

const TodoList = ({ todos, todoCompleted, deleteTodo }) => {
  const [todoButtonClicked, setTodoButtonClicked] = useState(false);

  function handleTodoButtonClicked() {
    setTodoButtonClicked(!todoButtonClicked);
  }

  return (
    <ul className="todos" role="list">
      {todos.map((todo, index) => (
        <li
          className={`todos__item ${index === 0 ? "first-item" : ""} ${
            todo.completed ? "todos__item--completed" : ""
          } `}
          key={index}
        >
          <button
            className={`btn circle-btn ${
              todoButtonClicked ? "btn-gradient" : ""
            }`}
            onClick={(e) => {
              handleTodoButtonClicked(e);
              todoCompleted(index);
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
        <li className="todos__item todos__item-footer">
          <p>{todos.length} item(s) left</p>
          <span className="completed-text">Clear Completed</span>
        </li>
      )}
    </ul>
  );
};

export default TodoList;
