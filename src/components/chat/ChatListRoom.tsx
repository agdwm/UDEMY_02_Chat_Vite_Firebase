import ChatRoom from "@/components/chat/ChatRoom";

import { useRoomActions } from "@/hooks/use-room-actions";

interface Props {
  handleClickRoomId: (id: string) => void;
}

const ChatListRoom = ({ handleClickRoomId }: Props) => {
  const { rooms } = useRoomActions();

  return (
    <div>
      {rooms.map((room) => (
        <ChatRoom
          room={room}
          key={room.id}
          handleClickRoomId={handleClickRoomId}
        />
      ))}
    </div>
  );
};

export default ChatListRoom;
