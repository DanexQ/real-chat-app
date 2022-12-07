import { User } from "firebase/auth";
import { UserInfoType } from "../interfaces/ChatsInterfaces";
import { doc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updateUserChats = async (
  ownerID: string,
  sender: UserInfoType | User,
  combinedID: string,
  text: string = "Start your new chat!"
) => {
  updateDoc(doc(db, "userChats", ownerID), {
    [combinedID + ".userInfo"]: {
      uid: sender?.uid,
      displayName: sender?.displayName,
      photoURL: sender?.photoURL,
    },
    [combinedID + ".date"]: Timestamp.now(),
    [combinedID + ".lastMessage"]: { text: text },
    [combinedID + ".chatType"]: "user",
  });
};
