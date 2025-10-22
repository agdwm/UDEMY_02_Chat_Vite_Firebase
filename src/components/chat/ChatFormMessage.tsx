import { messageZodSchema, type MessageZodSchemaType } from "@/lib/zod.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMessageActions } from "@/hooks/use-message-actions";
import { toast } from "sonner";
import { useTransition } from "react";

interface Props {
  roomId: string;
}

const ChatFormMessage = ({ roomId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const { sendMessage } = useMessageActions(roomId);

  const form = useForm<MessageZodSchemaType>({
    resolver: zodResolver(messageZodSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(values: MessageZodSchemaType) {
    startTransition(async () => {
      try {
        await sendMessage(values.text);
        form.reset();
      } catch (error) {
        console.error(error);
        toast.error("Error sending message");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send"}
        </Button>
      </form>
    </Form>
  );
};

export default ChatFormMessage;
