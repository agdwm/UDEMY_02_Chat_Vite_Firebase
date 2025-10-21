import TaskForm from "@/components/tasks/TaskForm";
import TaskList from "@/components/tasks/TaskList";
import { Suspense } from "react";

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>
      <TaskForm />
      <Suspense fallback={<div>Loading tasks...</div>}>
        <TaskList />
      </Suspense>
    </div>
  );
};

export default TasksPage;
