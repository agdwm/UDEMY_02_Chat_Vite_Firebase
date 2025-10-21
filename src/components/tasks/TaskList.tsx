import TaskItem from "@/components/tasks/TaskItem";
import { useTaskActions } from "@/hooks/use-task-actions";

const TaskList = () => {
  const { tasks } = useTaskActions();

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TaskList;
