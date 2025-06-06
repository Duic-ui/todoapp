import { useState } from "react";
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} />

      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
      
    </>
  );
}
