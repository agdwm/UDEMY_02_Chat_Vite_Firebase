import { taskZodSchema, type TaskZodSchemaType } from "@/lib/zod.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTransition } from "react";

import { useTaskActions } from "@/hooks/use-task-actions";
import { toast } from "sonner";

const TaskForm = () => {
  const [isPending, startTransition] = useTransition();

  const { createTask } = useTaskActions();

  const form = useForm<TaskZodSchemaType>({
    resolver: zodResolver(taskZodSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: TaskZodSchemaType) {
    startTransition(async () => {
      try {
        await createTask(values);
        form.reset();
      } catch (error) {
        console.error(error);
        toast.error("Error creating task");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your task title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter your description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="mb-8">
          {isPending ? "Creating..." : "Create Task"}
        </Button>
      </form>
    </Form>
  );
};
export default TaskForm;
