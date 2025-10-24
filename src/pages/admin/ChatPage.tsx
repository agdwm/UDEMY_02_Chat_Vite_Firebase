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
    <>
      <h1 className="text-2xl font-medium mb-6">Chat</h1>
      <div className="grid md: grid-cols-2 gap-6">
        <section className="space-y-4">
          <Suspense fallback={<div>Loading rooms...</div>}>
            <ChatFormRoom handleClickRoomId={handleClickRoomId} />
            <ChatListRoom handleClickRoomId={handleClickRoomId} />
          </Suspense>
        </section>
        {/* CHAT SECTION */}
        <section>
          {roomId ? (
            <Suspense fallback={<div>Loading messages...</div>}>
              <ChatMessages roomId={roomId} />
              <ChatFormMessage roomId={roomId} />
            </Suspense>
          ) : (
            <div>Selecciona una sala para chatear</div>
          )}
        </section>
      </div>
    </>
  );
};

export default ChatPage;
