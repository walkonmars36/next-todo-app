import "./TodoFilter.scss";

const TodoFilter = ({ todos, currentFilter, onFilterChange }) => {
  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="flex filters justify-center align-center">
      <button
        onClick={() => onFilterChange("all")}
        className={`btn ${currentFilter === "all" ? "filtered-todos" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange("active")}
        className={`btn ${currentFilter === "active" ? "filtered-todos" : ""}`}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        className={`btn ${
          currentFilter === "completed" ? "filtered-todos" : ""
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
