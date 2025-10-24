import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, Trash2 } from "lucide-react";
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
    <Card className="flex items-center gap-4 px-4 py-3 border bg-card/80 shadow-sm w-full  box-border">
      <button
        onClick={handleToggleTaskCompleted}
        disabled={isPending}
        className={cn(
          "mr-2 text-muted-foreground hover:text-primary transition",
          task.completed && "text-green-500"
        )}
        aria-label={
          task.completed ? "Marcar como pendiente" : "Marcar como completada"
        }
      >
        {task.completed ? (
          <CheckCircle className="h-5 w-5" />
        ) : (
          <Circle className="h-5 w-5" />
        )}
      </button>
      <div className="flex-1 items-center min-w-0">
        <CardTitle
          className={cn(
            "text-base text-center font-medium mb-1 truncate",
            task.completed ? "line-through text-gray-400" : ""
          )}
        >
          {task.title}
        </CardTitle>
        {task.description && (
          <CardContent className="p-0 text-bold text-muted-foreground whitespace-pre-line break-words">
            {task.description}
          </CardContent>
        )}
      </div>
      <Button
        variant="outline"
        size="icon-lg"
        onClick={handleDeleteTask}
        disabled={isPending}
        className="text-destructive hover:bg-destructive/10"
        aria-label="Eliminar tarea"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </Card>
  );
};
export default TaskItem;
