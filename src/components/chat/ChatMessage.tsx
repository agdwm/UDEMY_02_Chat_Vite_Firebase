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
        "max-w-[80%] mb-2 p-3 rounded-2xl shadow-sm text-sm ",
        isFriend
          ? "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" // mensaje de amigo
          : "bg-blue-100 text-gray-900 dark:bg-blue-900/40 dark:text-gray-100 ml-auto" // mensaje propio
      )}
    >
      <p className="whitespace-pre-wrap break-words">{message.text}</p>

      <p className="truncate text-xs text-gray-500 dark:text-gray-400 mt-1">
        {isFriend ? (
          <Suspense fallback={<span>Loading friend info...</span>}>
            <FriendEmail friendUID={message.senderId} />
          </Suspense>
        ) : (
          user.email
        )}
      </p>
    </div>
  );
};

export default ChatMessage;
