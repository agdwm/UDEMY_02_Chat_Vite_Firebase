import ChatFormMessage from "@/components/chat/ChatFormMessage";
import ChatFormRoom from "@/components/chat/ChatFormRoom";
import ChatListRoom from "@/components/chat/ChatListRoom";
import ChatMessages from "@/components/chat/ChatMessages";
import { Suspense, useState } from "react";

const ChatPage = () => {
  const [roomId, setRoomId] = useState("");

  const handleClickRoomId = (id: string) => {
    setRoomId(id);
  };

  return (
    <div className="grid md: grid-cols-2 gap-6">
      <section className="space-y-4">
        <Suspense fallback={<div>Loading rooms...</div>}>
          <ChatFormRoom handleClickRoomId={handleClickRoomId} />
          <ChatListRoom handleClickRoomId={handleClickRoomId} />
        </Suspense>
      </section>
      <section className="bg-gray-100 p-4 space-y-6">
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
