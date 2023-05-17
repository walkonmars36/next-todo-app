import { useState } from "react";
import "./AddTodo.scss";
import Image from "next/image";
import IconCheck from "/public/assets/images/icon-check.svg";

const AddTodo = ({ addTodo }) => {
  const [inputTodo, setInputTodo] = useState("");
  const [AddButtonClicked, setAddButtonClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputTodo) return;

    addTodo(inputTodo);
    setInputTodo("");
  }

  function handleAddButtonClicked() {
    setAddButtonClicked(!AddButtonClicked);
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <button
        className={`btn circle-btn ${AddButtonClicked ? "gradient" : ""}`}
        type="submit"
        onClick={handleAddButtonClicked}
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
