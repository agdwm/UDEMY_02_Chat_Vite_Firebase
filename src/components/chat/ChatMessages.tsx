import ChatMessage from "@/components/chat/ChatMessage";
import { useMessageActions } from "@/hooks/use-message-actions";

interface Props {
  roomId: string;
}

const ChatMessages = ({ roomId }: Props) => {
  const { messages } = useMessageActions(roomId);

  return (
    <div className="h-[calc(100dvh-300px)] min-h-0 overflow-y-auto bg-gray-100 p-4 space-y-6">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatMessages;
