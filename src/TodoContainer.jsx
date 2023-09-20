import Todo from "./Todo";

export default function TodoContainer({ todos, delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} index={index} delTodo={delTodo} />;
      })}
    </div>
  );
}
