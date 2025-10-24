import FriendEmail from "@/components/chat/FriendEmail";
import { Button } from "@/components/ui/button";
import type { Room } from "@/schemas/room.schema";
import { Suspense } from "react";
import { useUser } from "reactfire";

interface Props {
  room: Room;
  handleClickRoomId: (id: string) => void;
}

const ChatRoom = ({ room, handleClickRoomId }: Props) => {
  const { data: user } = useUser();

  const friendUID = room.participants.find((id) => id !== user?.uid) || "";

  return (
    <Button
      variant="ghost"
      className="w-full justify-start rounded-none border-b border-border px-4 py-6 hover:bg-muted/50"
      onClick={() => handleClickRoomId(room.id)}
    >
      <Suspense fallback={<div>Loading friend info...</div>}>
        <FriendEmail friendUID={friendUID} />
      </Suspense>
    </Button>
  );
};

export default ChatRoom;
