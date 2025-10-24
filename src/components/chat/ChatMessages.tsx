import ChatMessage from "@/components/chat/ChatMessage";
import { useMessageActions } from "@/hooks/use-message-actions";

interface Props {
  roomId: string;
}

const ChatMessages = ({ roomId }: Props) => {
  const { messages } = useMessageActions(roomId);

  return (
    <div className="w-full rounded-lg border bg-gray-100 flex flex-col justify-end overflow-hidden h-[35vh] md:h-[calc(100vh-20rem)]">
      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 flex flex-col gap-3 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent h-full md:h-full">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            No hay mensajes aún. ¡Sé el primero en escribir!
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
      </div>
    </div>
  );
};

export default ChatMessages;
