import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [inputTodo, setInputTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputTodo) return;

    addTodo(inputTodo);
    setInputTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Add</button>
      <input
        type="text"
        placeholder="Add a todo"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
