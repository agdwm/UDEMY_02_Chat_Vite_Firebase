import TasksForm from "@/components/tasks/TasksForm";
import TasksList from "@/components/tasks/TasksList";
import { Suspense } from "react";

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>
      <TasksForm />
      <Suspense fallback={<div>Loading tasks...</div>}>
        <TasksList />
      </Suspense>
    </div>
  );
};

export default TasksPage;
