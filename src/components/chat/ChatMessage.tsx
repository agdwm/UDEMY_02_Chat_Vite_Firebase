import FriendEmail from "@/components/chat/FriendEmail";
import { cn } from "@/lib/utils";
import type { Message } from "@/schemas/message.schema";
import { Suspense } from "react";
import { useUser } from "reactfire";

interface Props {
  message: Message;
}

const ChatMessage = ({ message }: Props) => {
  const { data: user } = useUser();

  const isFriend = user?.uid !== message.senderId;

  return (
    <div
      className={cn(
        "max-w-[80%] mb-2 p-4 rounded",
        isFriend ? "bg-pink-200" : "bg-green-200 ml-auto"
      )}
    >
      <p>{message.text}</p>
      {isFriend ? (
        <p className="truncate text-xs">
          <Suspense fallback={<span>Loading friend info...</span>}>
            <FriendEmail friendUID={message.senderId} />
          </Suspense>
          :
        </p>
      ) : (
        <p className="truncate text-xs">{user.email}:</p>
      )}
    </div>
  );
};

export default ChatMessage;
