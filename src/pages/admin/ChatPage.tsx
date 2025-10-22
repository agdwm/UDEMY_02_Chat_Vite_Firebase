import ChatListRoom from "@/components/chat/ChatListRoom";
import { Suspense } from "react";

const ChatPage = () => {
  return (
    <div className="grid md: grid-cols-2 gap-4">
      <section>
        <Suspense fallback={<div>Loading rooms...</div>}>
          <ChatListRoom />
        </Suspense>
      </section>
      <section>{/* Mostrar los mensajes */}</section>
    </div>
  );
};
export default ChatPage;
