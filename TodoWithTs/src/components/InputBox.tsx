import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { TodoType } from "../types/Todo";

interface TodoProps {
  addTodo: (todo: TodoType) => void;
}
export default function InputBox({ addTodo }: TodoProps) {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const handleSubmit = () => {
    if (!task) alert("enter the task ");
    else {
      const newTodo: TodoType = {
        id: Date.now(),
        task,
        deadline,
      };
      setTask("");
      setDeadline(0);
      addTodo(newTodo);
    }
  };
  return (
    <div className="mt-5 w-200 h-20 bg-black  flex justify-between items-center rounded-xl">
      <Input
        type="text"
        value={task}
        className="w-100 text-white"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Todo..."
      />
      <Input
        type="number"
        value={deadline}
        className="w-40 text-white"
        placeholder="Deadline (in days)"
        onChange={(e) => setDeadline(Number(e.target.value))}
      />
      <Button
        className="w-20 bg-white hover:bg-gray-300"
        onClick={handleSubmit}
      >
        <Plus className="text-black" />
      </Button>
    </div>
  );
}
