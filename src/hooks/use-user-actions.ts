import type { FirestoreUser } from "@/schemas/user.schema";
import type { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";

export const useUserActions = () => {
  const db = useFirestore();

  const createOrUpdateUser = async (user: User) => {
    if (!user) throw new Error("User not available");

    //Referenciar el documento del usuario en Firestore
    const userDocRef = doc(db, "users", user.uid);

    const userData: FirestoreUser = {
      uid: user.uid,
      email: user.email || "",
      photoURL: user.photoURL || "",
      displayName: user.displayName || "",
    };

    return await setDoc(userDocRef, userData, {
      merge: true,
    });
  };

  return {
    createOrUpdateUser,
  };
};
