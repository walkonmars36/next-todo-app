import { useState } from "react";
import "./AddTodo.scss";
import Image from "next/image";
import IconCheck from "/public/assets/images/icon-check.svg";
const AddTodo = ({ addTodo, buttonClicked, handleButtonClicked }) => {
  const [inputTodo, setInputTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputTodo) return;

    addTodo(inputTodo);
    setInputTodo("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <button
        className={`btn circle-btn ${buttonClicked ? "btn-gradient" : ""}`}
        type="submit"
        onClick={handleButtonClicked}
      >
        <Image src={IconCheck} alt="add item" />
      </button>

      <input
        type="text"
        placeholder="Create a new todo"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
