import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { User } from "firebase/auth";
import { ChatContextState } from "../../interfaces/ChatInterfaces";
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
      text = text?.trim();
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        () => {},
        (error: Error) => {
          alert(
            `Something went wrong with sending message(uploadTask.on). Please try again in a while. \n${error.message}`
          );
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", chat.chatID!), {
              messages: arrayUnion({
                id: uuid(),
                text: text,
                senderId: currentUser?.uid,
                senderName: currentUser?.displayName,
                date,
                image: downloadURL,
                unread: true,
              }),
            });
          });
        }
      );
    } else if (text) {
      await updateDoc(doc(db, "chats", chat.chatID!), {
        messages: arrayUnion({
          id: uuid(),
          text: text,
          senderId: currentUser?.uid,
          senderName: currentUser?.displayName,
          date,
          unread: true,
        }),
      });
    }
    text = text || `${currentUser?.displayName} sent a photo.`;
    updateUserChats(currentUser!.uid, chat.user, chat.chatID!, text);
    updateUserChats(chat.user.uid, currentUser!, chat.chatID!, text);
  } catch (err) {
    alert(
      `Something went wrong with sending message. Please try again in a while.: ${err}`
    );
    throw new Error();
  }
};
