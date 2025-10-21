import { useTaskActions } from "@/hooks/use-task-actions";

const TasksList = () => {
  const { tasks } = useTaskActions();

  return (
    <div>
      <pre> {JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
};
export default TasksList;
