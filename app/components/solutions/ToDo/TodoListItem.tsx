import { Todo } from "./ToDoList";

const TodoListItem = ({
  todo,
  handleDeleteTodo,
  handleToggleCompleted,
}: {
  todo: Todo;
  handleDeleteTodo: () => void;
  handleToggleCompleted: () => void;
}) => {
  return (
    <div key={todo.id} className="flex flex-row gap-2 w-ful justify-between">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <div className="flex flex-row gap-1">
        <input
          type="checkbox"
          id={todo.id}
          name={todo.text}
          value={todo.text}
          checked={todo.completed}
          onChange={handleToggleCompleted}
        />
        <button type="button" onClick={handleDeleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
