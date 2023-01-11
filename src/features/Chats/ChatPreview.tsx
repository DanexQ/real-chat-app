import { deleteField, doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import * as S from "./StyledChatPreview";
import { db } from "../../firebase";
import AuthContext from "../../context/AuthContext";
import { ChatsContext } from "../../context/ChatsContext";
import { ChatPreviewProps } from "../../interfaces/ChatsInterfaces";
import { combineId } from "../../utils/CombineId";
import { calcMessageDate } from "../../utils/calcMessageDate";

const ChatPreview = ({
  date,
  lastMessage,
  userInfo,
  isActive,
  chatId,
}: ChatPreviewProps) => {
  const { currentUser } = useContext(AuthContext);
  const { chatDispatch } = useContext(ChatContext);

  const formattedLastMessage =
    lastMessage?.text.length < 78
      ? lastMessage?.text
      : `${lastMessage?.text.slice(0, 70)}...`;
  const chatDate = calcMessageDate(date);

  const handleSelectChat = () => {
    const combinedID = combineId(currentUser!.uid, userInfo.uid);
    chatDispatch({
      type: "CHANGE_USER_CHAT",
      payload: { user: userInfo, combinedID },
    });
  };

  // const handleDeleteChat = async (
  //   e: React.MouseEvent<SVGElement>,
  //   chatId: string
  // ) => {
  //   e.stopPropagation();
  //   const userChatsRef = doc(db, "userChats", currentUser!.uid);

  //   try {
  //     await updateDoc(userChatsRef, {
  //       [chatId]: deleteField(),
  //     });
  //     dispatchChats({ type: "DELETE_CHAT", chatId: chatId });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  return (
    <S.Chat onClick={handleSelectChat} isActive={isActive}>
      <S.ChatAvatarContainer>
        <S.ChatAvatar src={userInfo.photoURL} alt="friend" />
      </S.ChatAvatarContainer>
      <S.PreviewContainer>
        <S.ChatsDetails>
          <S.FriendsName>{userInfo.displayName}</S.FriendsName>
          <S.Dot></S.Dot>
          <S.LastMessageDate>{chatDate}</S.LastMessageDate>
          {/* <S.DeleteIcon onClick={(e) => handleDeleteChat(e, chatId)} /> */}
        </S.ChatsDetails>
        <S.LastMessage>{formattedLastMessage}</S.LastMessage>
      </S.PreviewContainer>
    </S.Chat>
  );
};

export default ChatPreview;
