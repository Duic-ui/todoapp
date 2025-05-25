export default function ToDoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArr = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArr);
    console.log(todos);
  }

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-4xl shadow mt-2.5 p-4 flex items-center h-20">
      <span
        className={`text-3xl flex-1 flex items-center pl-8
  ${item.done ? "line-through text-gray-400" : ""}`}
        onClick={() => handleClick(item.name)}
      >
        {item.name}
      </span>

      <button
        className="ml-4 text-xl text-red-500 pr-8"
        onClick={() => handleDelete(item)}
      >
        X
      </button>
    </div>
  );
}
