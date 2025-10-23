import type { TodoType } from "../types/Todo";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoType[];
  deleteTodo: (id: number) => void;
}
export default function TodosList({ todos, deleteTodo }: TodoListProps) {
  return (
    <div className="mt-5 w-200 h-130 bg-black border border-white flex flex-col items-center rounded-xl overflow-y-auto">
      {todos.length === 0 ? (
        <p className="text-white">no todos</p>
      ) : (
        todos.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            deadline={todo.deadline}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}
