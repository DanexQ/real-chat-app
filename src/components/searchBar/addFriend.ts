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
import { updateUserChats } from "../../utils/updateUserChats";

interface AddFriend {
  currentUser: User;
  user: UserInfoType;
  chatDispatch: ChatDispatchType;
}

export const addFriend = async ({
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

  try {
    if (docSnap.exists()) {
      chatDispatch({
        type: "CHANGE_USER_CHAT",
        payload: { user: user, combinedID },
      });

      !userChats.includes(combinedID) &&
        (await updateUserChats(currentUser?.uid, user, combinedID));
    } else {
      const docCollection = collection(db, "chats");

      await setDoc(doc(docCollection, combinedID), { messages: [] });
      await updateUserChats(currentUser?.uid, user, combinedID);
      await updateUserChats(user.uid, currentUser, combinedID);
    }
  } catch (err) {
    console.log(err);
  }
};
