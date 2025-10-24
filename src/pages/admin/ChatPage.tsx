import ChatFormMessage from "@/components/chat/ChatFormMessage";
import ChatFormRoom from "@/components/chat/ChatFormRoom";
import ChatListRoom from "@/components/chat/ChatListRoom";
import ChatMessages from "@/components/chat/ChatMessages";
import Title from "@/components/ui/title";
import { Suspense, useState } from "react";

const ChatPage = () => {
  const [roomId, setRoomId] = useState("");

  const handleClickRoomId = (id: string) => {
    setRoomId(id);
  };

  return (
    <>
      <Title text={"Chat"} />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 h-full">
        {/* ROOM SECTION */}
        <section className="space-y-4 md:h-[calc(100vh-9rem)] md:overflow-y-auto">
          <Suspense fallback={<div>Loading rooms...</div>}>
            <ChatFormRoom handleClickRoomId={handleClickRoomId} />
            <ChatListRoom handleClickRoomId={handleClickRoomId} />
          </Suspense>
        </section>
        {/* CHAT SECTION */}
        <section className="flex flex-col h-full">
          {roomId ? (
            <Suspense fallback={<div>Loading messages...</div>}>
              <div className="flex flex-col flex-1 min-h-0">
                <ChatMessages roomId={roomId} />
                <ChatFormMessage roomId={roomId} />
              </div>
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
