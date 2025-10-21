import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTaskActions } from "@/hooks/use-task-actions";
import { cn } from "@/lib/utils";
import type { Task } from "@/schemas/task.schema";
import { useTransition } from "react";
import { toast } from "sonner";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  const { deleteTask, toggleTaskCompleted } = useTaskActions();
  const [isPending, startTransition] = useTransition();

  const handleDeleteTask = async () => {
    startTransition(async () => {
      try {
        await deleteTask(task.id);
      } catch (error) {
        console.error("Error deleting task:", error);
        toast.error("Error deleting task");
      }
    });
  };

  const handleToggleTaskCompleted = async () => {
    startTransition(async () => {
      try {
        await toggleTaskCompleted(task.id);
      } catch (error) {
        console.error("Error toggling task completed:", error);
      }
    });
  };

  return (
    <Card className="flex flex-row items-center justify-between mb-4">
      <CardHeader className="flex-1">
        <CardTitle
          className={cn(
            "text-lg font-semibold",
            task.completed ? "line-through text-gray-500" : ""
          )}
        >
          {task.title}
        </CardTitle>
        <CardAction className="flex gap-2">
          <Button
            variant={"outline"}
            onClick={handleToggleTaskCompleted}
            disabled={isPending}
          >
            Update
          </Button>
          <Button
            variant={"destructive"}
            onClick={handleDeleteTask}
            disabled={isPending}
          >
            Delete
          </Button>
        </CardAction>
      </CardHeader>
      {task.description && (
        <CardContent className="flex-1 text-right">
          {task.description}
        </CardContent>
      )}
    </Card>
  );
};
export default TaskItem;
