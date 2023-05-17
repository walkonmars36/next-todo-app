import "./TodoList.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Image from "next/image";
import IconCheck from "/public/assets/images/icon-check.svg";
import IconCross from "/public/assets/images/icon-cross.svg";

const TodoList = ({
  todos,
  setTodos,
  filter,
  toggleCompleted,
  deleteTodo,
  clearCompleted,
}) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return todo.status === "active" || todo.status === "completed";
    } else if (filter === "active") {
      return todo.status === "active";
    } else if (filter === "completed") {
      return todo.status === "completed" || todo.status === "hidden";
    }
    return false;
  });

  const activeTodosCount = todos.filter(
    (todo) => todo.status === "active"
  ).length;

  console.log("activeTodosCount", activeTodosCount);

  const completedTodosCount = todos.filter(
    (todo) => todo.status === "hidden"
  ).length;

  const showFooter =
    (activeTodosCount > 0 && filter === "all") ||
    filter === "active" ||
    completedTodosCount >= 1;

  console.log("completedTodosCount", completedTodosCount);

  function handleDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = [...todos];
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    setTodos(items);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todos"
              role="list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTodos.map((todo, index) => (
                <Draggable
                  key={index}
                  draggableId={String(index)}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className={`todos__item ${
                        index === 0 ? "first-item" : ""
                      } ${
                        todo.status !== "active" ? "todos__item--completed" : ""
                      } `}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <button
                        className={`btn circle-btn ${
                          todo.status !== "active" ? "gradient" : ""
                        }`}
                        onClick={() => {
                          toggleCompleted(index);
                        }}
                      >
                        <Image src={IconCheck} alt="check completed item" />
                      </button>
                      {todo.text}
                      {todo.status !== "hidden" && (
                        <button
                          className="btn todos__item-delete"
                          onClick={() => deleteTodo(todo.id)}
                        >
                          <Image
                            className="icon-cross"
                            src={IconCross}
                            alt="delete item"
                          />
                        </button>
                      )}
                    </li>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}

              {showFooter && (
                <li className="todos__item todos__item-footer">
                  {filter !== "completed" && (
                    <span className="todos__item-footer-text">
                      {activeTodosCount >= 1 ? activeTodosCount : "No"}{" "}
                      {activeTodosCount === 1 ? "task" : "tasks"} left.
                    </span>
                  )}

                  {filter === "completed" && (
                    <span className="todos__item-footer-text">
                      {completedTodosCount}{" "}
                      {completedTodosCount === 1 ? "task" : "tasks"} completed
                    </span>
                  )}

                  {todos.some(
                    (todo) => todo.status === "completed" && filter === "all"
                  ) && (
                    <button
                      onClick={clearCompleted}
                      className="btn todos__clear-btn todos__item-footer-text"
                    >
                      Clear Completed
                    </button>
                  )}

                  {todos.some((todo) => todo.status === "hidden") &&
                    filter === "completed" && (
                      <button
                        onClick={() =>
                          todos
                            .filter((todo) => todo.status === "hidden")
                            .forEach((todo) => deleteTodo(todo.id))
                        }
                        className="btn todos__clear-btn todos__item-footer-text"
                      >
                        Delete Completed
                      </button>
                    )}
                </li>
              )}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {filter === "completed" &&
        !todos.some((todo) => todo.status === "hidden") && (
          <div className="no-completed-message">
            All done here, go and finish another task!
          </div>
        )}
    </>
  );
};

export default TodoList;
