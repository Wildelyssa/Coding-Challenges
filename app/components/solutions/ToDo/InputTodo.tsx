interface Props {
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: () => void;
}
// set up an input
// set the text value of the input to state on "Enter" and onChange
// call function to add the new todo with text input value to the todos array

const InputTodo = ({ handleAddTodo, todoText, setTodoText }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-start">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        placeholder="Add a new to do"
      />
      <button type="button" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default InputTodo;
