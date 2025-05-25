import { useState } from "react";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name: "", done:false});
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo({name: "", done:false});
  }

  return (
    <div className="flex justify-center items-center bg-white h-20 
    rounded-2xl drop-shadow-lg drop-shadow-cyan-300 mt-5 border border-b-cyan-300  border-t-cyan-400
    mr-4 ml-4"
    >
      <form onSubmit={handleSubmit}>
        <input
          className="border border-amber-600 h-13 rounded-2xl w-2xl mr-5 text-2xl drop-shadow-amber-300 drop-shadow-lg"
          onChange={(e) => setTodo({name:e.target.value, done:false})}
          value={todo.name}
          type="text"
        />
        <button type="submit" className="h-13 text-2xl  border-b-blue-600 pl-3 pr-3 rounded-2xl bg-blue-400">Add</button>
      </form>
    </div>
  );
}
