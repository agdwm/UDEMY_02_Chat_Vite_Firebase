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
    <Button onClick={() => handleClickRoomId(room.id)}>
      <Suspense fallback={<div>Loading friend info...</div>}>
        <FriendEmail friendUID={friendUID} />
      </Suspense>
    </Button>
  );
};

export default ChatRoom;
