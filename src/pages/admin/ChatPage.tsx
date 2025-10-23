import ChatFormMessage from "@/components/chat/ChatFormMessage";
import ChatListRoom from "@/components/chat/ChatListRoom";
import ChatMessages from "@/components/chat/ChatMessages";
import { Suspense, useState } from "react";

const ChatPage = () => {
  const [roomId, setRoomId] = useState("");

  const handleClickRoomId = (id: string) => {
    setRoomId(id);
  };

  return (
    <div className="grid md: grid-cols-2 gap-4">
      <section>
        <Suspense fallback={<div>Loading rooms...</div>}>
          <ChatListRoom handleClickRoomId={handleClickRoomId} />
        </Suspense>
      </section>
      <section>
        {roomId ? (
          <Suspense fallback={<div>Loading messages...</div>}>
            <ChatFormMessage roomId={roomId} />
            <ChatMessages roomId={roomId} />
          </Suspense>
        ) : (
          <div>Selecciona una sala para chatear</div>
        )}
      </section>
    </div>
  );
};

export default ChatPage;
