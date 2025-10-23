import type { Room } from "@/schemas/room.schema";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

export const useRoomActions = () => {
  // Obtener una referencia al servicio Firestore para interactuar con la base de datos
  const db = useFirestore();

  // Obtener los datos del usuario actualmente autenticado
  const { data: user } = useUser();

  const roomRef = collection(db, "rooms");

  // Obtener las salas donde participe el usuario actual
  const roomQuery = query(
    roomRef,
    where("participants", "array-contains", user?.uid)
  );

  const { data: rooms } = useFirestoreCollectionData(roomQuery, {
    suspense: true,
    idField: "id",
  });

  // Buscar un user a partir de su email
  const searchUserByEmail = async (email: string) => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];

    return doc.data();
  };

  const findOrCreateRoom = async (friendEmail: string) => {
    if (!user)
      return {
        success: false,
        message: "401 - No autenticado",
        roomId: null,
      };

    if (user.email === friendEmail) {
      return {
        success: false,
        message: "400 - You can't chat with yourself",
        roomId: null,
      };
    }

    const friend = await searchUserByEmail(friendEmail);

    if (!friend) {
      return {
        success: false,
        message: "404 - Friend not found",
        roomId: null,
      };
    }

    // Verificar si ya existe una sala con este amigo
    const existRoom = rooms.find((room) =>
      room.participants.find((uid: string) => uid === friend.uid)
    );

    if (existRoom) {
      return {
        success: true,
        message: "200 - Room found",
        roomId: existRoom.id,
      };
    }

    // Si no existe, crear una nueva sala
    const newRoom: Omit<Room, "id"> = {
      createdAt: serverTimestamp(),
      participants: [user.uid, friend.uid],
      lastMessage: null,
    };

    // Agregar la nueva sala a la colección de Firestore
    const document = await addDoc(roomRef, newRoom);

    return {
      success: true,
      message: "201 - Room created",
      roomId: document.id,
    };
  };

  return {
    rooms: rooms as Room[],
    findOrCreateRoom,
  };
};
