import { useUser, useFirestore, useFirestoreCollectionData } from "reactfire";
import {
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import type { Task } from "@/schemas/task.schema";

export const useTaskActions = () => {
  const { data: user } = useUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const db = useFirestore();
  const taskCollectionRef = collection(db, "tasks");

  const tasksQuery = query(taskCollectionRef, where("userId", "==", user?.uid));

  const { status, data: tasks } = useFirestoreCollectionData(tasksQuery, {
    idField: "id",
    suspense: true,
  });

  const sortedTasks = [...(tasks || [])].sort(
    (a, b) => a.createdAt?.seconds - b.createdAt?.seconds
  );

  // CREATE TASK
  const createTask = async (data: { title: string; description?: string }) => {
    const newTask = {
      ...data,
      completed: false,
      userId: user!.uid,
      createdAt: serverTimestamp(),
    };

    return await addDoc(taskCollectionRef, newTask);
  };

  // DETELE TASK
  const deleteTask = async (taskId: string) => {
    const taskDoc = doc(db, "tasks", taskId);
    return await deleteDoc(taskDoc);
  };

  // TOGGLE TASK COMPLETED
  const toggleTaskCompleted = async (taskId: string) => {
    const task = tasks.find((task) => task.id === taskId);
    const taskDoc = doc(db, "tasks", taskId);

    if (!task) {
      throw new Error("Task not found");
    }

    return await updateDoc(taskDoc, {
      completed: !task.completed,
    });
  };

  return {
    tasks: sortedTasks as Task[],
    isLoading: status === "loading",

    createTask,
    deleteTask,
    toggleTaskCompleted,
  };
};
