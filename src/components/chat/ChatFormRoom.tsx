import {
  emailFriendZodSchema,
  type EmailFriendZodSchemaType,
} from "@/lib/zod.schema";
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
import { useTransition } from "react";
import { toast } from "sonner";
import { useRoomActions } from "@/hooks/use-room-actions";

interface Props {
  handleClickRoomId: (id: string) => void;
}

const ChatFormRoom = ({ handleClickRoomId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const { findOrCreateRoom } = useRoomActions();

  const form = useForm<EmailFriendZodSchemaType>({
    resolver: zodResolver(emailFriendZodSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: EmailFriendZodSchemaType) {
    startTransition(async () => {
      const response = await findOrCreateRoom(values.email);

      if (response.success) {
        handleClickRoomId(response.roomId);
        toast.success(response.message);
        form.reset();
        return;
      }

      toast.error(response.message);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your friend email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"outline"}
          className="w-full border-gray-400 mb-4"
          disabled={isPending}
        >
          {isPending ? "Searching friend..." : "Search friend"}
        </Button>
      </form>
    </Form>
  );
};

export default ChatFormRoom;
