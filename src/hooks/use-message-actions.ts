import type { Message } from "@/schemas/message.schema";
import type { LastMessage } from "@/schemas/room.schema";
import {
  addDoc,
  collection,
  doc,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

export const useMessageActions = (roomId: string) => {
  const { data: user } = useUser();
  const db = useFirestore();

  const messagesRef = collection(db, "rooms", roomId, "messages");

  const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));

  const { data: messages } = useFirestoreCollectionData(messagesQuery, {
    suspense: true,
    idField: "id",
  });

  const sendMessage = async (text: string) => {
    if (!user)
      throw new Error("useMessageActions: 401 - User not authenticated");

    if (!text.trim())
      throw new Error("useMessageActions: 400 - Message is empty");

    const timestamp = serverTimestamp();

    const messageData: Omit<Message, "id"> = {
      senderId: user.uid,
      text,
      timestamp,
    };

    const roomRef = doc(db, "rooms", roomId);

    const lastMessage: LastMessage = {
      senderId: user.uid,
      text,
      timestamp,
    };

    await Promise.all([
      // update the lastMessage field in the room document
      updateDoc(roomRef, {
        lastMessage,
      }),
      // add the message to the messages collection
      addDoc(messagesRef, messageData),
    ]);
  };

  return {
    messages: messages as Message[],
    sendMessage,
  };
};
