import TaskItem from "@/components/tasks/TaskItem";
import { useTaskActions } from "@/hooks/use-task-actions";

const TaskList = () => {
  const { tasks } = useTaskActions();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TaskList;
