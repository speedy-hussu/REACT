import { X } from "lucide-react";
import { Button } from "./ui/button";
import type { TodoType } from "../types/Todo";

interface TodoProps extends TodoType {
  deleteTodo: (id: number) => void;
}
interface TodoProps {}
export default function Todo({ id, task, deadline, deleteTodo }: TodoProps) {
  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <div className="mt-2 text-white w-full h-10 p-5 bg-black flex justify-between items-center">
      <div className="w-2/3">{task}</div>
      <div className=" w-1/6">
        {deadline == 0 ? "TODAY!!" : "DEADLINE: " + deadline + " days"}
      </div>
      <Button onClick={handleDelete}>
        <X />
      </Button>
    </div>
  );
}
