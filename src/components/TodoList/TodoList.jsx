import "./TodoList.scss";
import Image from "next/image";
import IconCheck from "/public/assets/images/icon-check.svg";
import IconCross from "/public/assets/images/icon-cross.svg";

const TodoList = ({
  todos,
  deleteTodo,
  buttonClicked,
  handleButtonClicked,
}) => {
  return (
    <ul className="todos" role="list">
      {todos.map((todo, index) => (
        <li
          className={`todos__item ${index === 0 ? "first-item" : ""} ${
            index === todos.length - 1 ? "last-item" : ""
          }`}
          key={index}
        >
          <button
            className={`btn circle-btn ${buttonClicked ? "btn-gradient" : ""}`}
            onClick={handleButtonClicked}
          >
            <Image src={IconCheck} alt="check item" />
          </button>
          {todo}
          <button className="btn" onClick={() => deleteTodo(index)}>
            <Image className="icon-cross" src={IconCross} alt="delete item" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
