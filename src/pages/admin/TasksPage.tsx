import TaskForm from "@/components/tasks/TaskForm";
import TaskList from "@/components/tasks/TaskList";
import Title from "@/components/ui/title";
import { Suspense } from "react";

const TasksPage = () => {
  return (
    <div>
      <Title text={"Tasks"} />
      <TaskForm />
      <Suspense fallback={<div>Loading tasks...</div>}>
        <TaskList />
      </Suspense>
    </div>
  );
};

export default TasksPage;
