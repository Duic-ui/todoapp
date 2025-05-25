import { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
    <Header />
      <Todo />
      
      {/* <h1 className="text-red-500">Vite</h1> */}
    </>
  );
}

export default App;
