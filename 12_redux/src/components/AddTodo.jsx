import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispact = useDispatch();
  const handler = (e) => {
    e.preventDefault();
    dispact(addTodo(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={handler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
    </>
  );
}

export default AddTodo;
