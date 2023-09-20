import { useState } from "react";
import "./App.css";
import InputContainer from "./InputContainer";
import TodoContainer from "./TodoContainer";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const writeTodo = (e) => {
    setInputVal(e.target.value);
  };

  const addTodo = () => {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  };

  const delTodo = (idx) => {
    setTodos((prevTodos) => prevTodos.filter((todo, index) => index !== idx));
  };

  return (
    <div>
      <h1>Todo List React</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} delTodo={delTodo} />
    </div>
  );
}

export default App;
