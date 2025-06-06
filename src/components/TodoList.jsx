import ToDoItem from "./ToDoItem";

export default function TodoList({ todos, setTodos }) {

  if (!todos || todos.length === 0) return null;
  const sortedTodos = todos.slice().sort((a,b) => Number(a.done)-Number(b.done))
  return (
    <div className="flex justify-center mt-7 ">
      <div className="border border-amber-700 flex flex-col items-center w-full max-w-4xl  pb-2.5 rounded-4xl shadow-lg shadow-blue-400">
        {sortedTodos.map((item) => (
          <ToDoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
