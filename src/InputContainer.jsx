export default function InputContainer({ inputVal, writeTodo, addTodo }) {
  return (
    <div className="input-container">
      <input
        id="input-todo"
        type="text"
        value={inputVal}
        placeholder="Enter some Todo..."
        onChange={writeTodo}
      />
      <button onClick={addTodo} id="add-todo">
        +
      </button>
    </div>
  );
}
