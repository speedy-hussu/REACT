import { useState } from "react";
import InputBox from "./components/InputBox";
import TodosList from "./components/TodosList";
import type { TodoType } from "./types/Todo";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1020, task: "hello kaiso ho", deadline: 10 },
  ]);
  const addTodo = (todo: TodoType) => {
    setTodos((prev) => [...prev, todo]);
    
  };
  const deleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo: TodoType) => todo.id !== id);
    setTodos(filteredTodos);
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-black">
      <InputBox addTodo={addTodo} />
      <TodosList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
