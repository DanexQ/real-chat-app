import { combineId } from "../../utils/CombineId";
import { UserInfoType } from "../../interfaces/ChatsInterfaces";
import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { User } from "firebase/auth";
import { ChatDispatchType } from "../../interfaces/ChatInterfaces";

interface AddFriend {
  currentUser: User;
  user: UserInfoType;
  chatDispatch: ChatDispatchType;
}

export const useAddFriend = async ({
  currentUser,
  user,
  chatDispatch,
}: AddFriend) => {
  const combinedID = combineId(currentUser.uid, user.uid);
  const docRef = doc(db, "chats", combinedID);
  const userChatsRef = doc(db, "userChats", currentUser.uid);
  const userChatsSnap = await getDoc(userChatsRef);
  const userChats = Object.keys(userChatsSnap.data() as object);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    chatDispatch({
      type: "CHANGE_USER_CHAT",
      payload: { user: user, combinedID: combinedID },
    });

    !userChats.includes(combinedID) &&
      (await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedID + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combinedID + ".date"]: serverTimestamp(),
        [combinedID + ".lastMessage"]: { text: "Start your chat!" },
        [combinedID + ".chatType"]: "user",
      }));
  } else {
    const docCollection = collection(db, "chats");
    await setDoc(doc(docCollection, combinedID), { messages: [] });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [combinedID + ".userInfo"]: {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      [combinedID + ".date"]: serverTimestamp(),
      [combinedID + ".lastMessage"]: { text: "Start your new chat!" },
      [combinedID + ".chatType"]: "user",
    });

    await updateDoc(doc(db, "userChats", user.uid), {
      [combinedID + ".userInfo"]: {
        uid: currentUser.uid,
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
      },
      [combinedID + ".date"]: serverTimestamp(),
      [combinedID + ".lastMessage"]: {
        text: "Start your new chat!",
      },
      [combinedID + ".chatType"]: "user",
    });
  }
};
