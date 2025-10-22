import { Button } from "@/components/ui/button";
import { useRoomActions } from "@/hooks/use-room-actions";

interface Props {
  handleClickRoomId: (id: string) => void;
}

const ChatListRoom = ({ handleClickRoomId }: Props) => {
  const { rooms } = useRoomActions();

  return (
    <div>
      {rooms.map((room) => (
        <Button key={room.id} onClick={() => handleClickRoomId(room.id)}>
          {room.id}
        </Button>
      ))}
      <pre>{JSON.stringify(rooms, null, 2)}</pre>
    </div>
  );
};

export default ChatListRoom;
