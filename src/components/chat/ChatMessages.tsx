import ChatMessage from "@/components/chat/ChatMessage";
import { useMessageActions } from "@/hooks/use-message-actions";

interface Props {
  roomId: string;
}

const ChatMessages = ({ roomId }: Props) => {
  const { messages } = useMessageActions(roomId);

  return (
    <div>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatMessages;
