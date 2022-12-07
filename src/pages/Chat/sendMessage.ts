import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { User } from "firebase/auth";
import { ChatContextState } from "../../interfaces/ChatInterfaces";
import { currentUserType } from "../../context/AuthContext";
import { updateUserChats } from "../../utils/updateUserChats";

interface SendMessageProps {
  currentUser: User | null;
  chat: ChatContextState;
  image: File | undefined;
  text: string | undefined;
}

export const sendMessage = async ({
  chat,
  currentUser,
  image,
  text,
}: SendMessageProps) => {
  const date = Timestamp.now();
  try {
    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        () => {},
        (error: Error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", chat.chatID), {
              messages: arrayUnion({
                id: uuid(),
                text: text?.trim(),
                senderId: currentUser?.uid,
                date,
                image: downloadURL,
                unread: true,
              }),
            });
          });
        }
      );
    } else if (text) {
      await updateDoc(doc(db, "chats", chat.chatID), {
        messages: arrayUnion({
          id: uuid(),
          text: text.trim(),
          senderId: currentUser?.uid,
          senderName: currentUser?.displayName,
          date,
          unread: true,
        }),
      });
    }
    updateUserChats(currentUser!.uid, chat.user, chat.chatID, text);
    updateUserChats(chat.user.uid, currentUser!, chat.chatID, text);
  } catch (err) {
    alert(`Error from sendMessage.ts: ${err}`);
    throw new Error();
  }
};
