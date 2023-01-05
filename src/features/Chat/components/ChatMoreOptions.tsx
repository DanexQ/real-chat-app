import AuthContext from "@context/AuthContext";
import { ChatContext } from "@context/ChatContext";
import { ChatsContext } from "@context/ChatsContext";
import { deleteField, doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { db } from "src/firebase";
import * as S from "../styles/StyledChatMoreOptions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

interface Props {
  hide: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatMoreOptions = ({ hide, setShowModal }: Props) => {
  const { currentUser } = useContext(AuthContext);
  const { chat, chatDispatch } = useContext(ChatContext);
  const { dispatch: dispatchChats } = useContext(ChatsContext);

  const handleDeleteChat = async (chatId: string) => {
    const userChatsRef = doc(db, "userChats", currentUser!.uid);

    try {
      await updateDoc(userChatsRef, {
        [chatId]: deleteField(),
      });
      chatDispatch({ type: "CLEAR_STATE" });
      dispatchChats({ type: "DELETE_CHAT", chatId: chatId });
    } catch (err) {
      alert(err);
    }
  };

  const handleAnimationEnd = () => {
    hide && setShowModal(false);
  };

  return (
    <S.MoreOptionsContainer hide={hide} onAnimationEnd={handleAnimationEnd}>
      <S.OptionsList>
        <S.Option onClick={() => handleDeleteChat(chat.chatID!)}>
          <DeleteOutlineIcon />
          <span>Delete Chat</span>
        </S.Option>
        <S.Option>
          <PushPinOutlinedIcon />
          <span>Pin Chat</span>
        </S.Option>
      </S.OptionsList>
    </S.MoreOptionsContainer>
  );
};

export default ChatMoreOptions;
