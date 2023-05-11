import "./TodoFilter.scss";

const TodoFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div>
      <button
        onClick={() => onFilterChange("all")}
        className={currentFilter === "all" ? "filtered-todos" : ""}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange("active")}
        className={currentFilter === "active" ? "filtered-todos" : ""}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        className={currentFilter === "completed" ? "filtered-todos" : ""}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
