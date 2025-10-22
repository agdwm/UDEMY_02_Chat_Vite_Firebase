import { useMessageActions } from "@/hooks/use-message-actions";

interface Props {
  roomId: string;
}

const ChatMessage = ({ roomId }: Props) => {
  const { messages } = useMessageActions(roomId);

  return (
    <div>
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </div>
  );
};

export default ChatMessage;
