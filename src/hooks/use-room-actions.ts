import type { Room } from "@/schemas/room.schema";
import { collection, query, where } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

export const useRoomActions = () => {
  // Obtener una referencia al servicio Firestore para interactuar con la base de datos
  const db = useFirestore();

  // Obtener los datos del usuario actualmente autenticado
  const { data: user } = useUser();

  const roomRef = collection(db, "rooms");

  const roomQuery = query(
    roomRef,
    where("participants", "array-contains", user?.uid)
  );

  const { data: rooms } = useFirestoreCollectionData(roomQuery, {
    suspense: true,
    idField: "id",
  });

  return {
    rooms: rooms as Room[],
  };
};
