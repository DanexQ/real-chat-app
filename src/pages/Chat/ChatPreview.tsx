import {
  deleteDoc,
  deleteField,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext } from "react";
import styled from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import { Avatar } from "../../styles/Avatar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { db } from "../../firebase";
import AuthContext from "../../context/AuthContext";
import { ChatsContext } from "../../context/ChatsContext";
import { ChatPreviewProps } from "../../interfaces/ChatsInterfaces";
import { combineId } from "../../utils/CombineId";

const ChatPreview = ({
  date,
  lastMessage,
  userInfo,
  isActive,
  chatId,
}: ChatPreviewProps) => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch: dispatchChat } = useContext(ChatContext);
  const { dispatch: dispatchChats } = useContext(ChatsContext);
  const formattedLastMessage =
    lastMessage?.text.length < 78
      ? lastMessage?.text
      : `${lastMessage?.text.slice(0, 70)}...`;

  const handleSelectChat = () => {
    const combinedID = combineId(currentUser!.uid, userInfo.uid);
    dispatchChat({
      type: "CHANGE_USER_CHAT",
      payload: { user: userInfo, combinedID: combinedID },
    });
  };

  const options: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
  };

  const chatDate = new Intl.DateTimeFormat("en-US", options).format(
    date.toDate()
  );

  const handleDeleteChat = async (
    e: React.MouseEvent<SVGElement>,
    chatId: string
  ) => {
    e.stopPropagation();
    const userChatsRef = doc(db, "userChats", currentUser!.uid);

    try {
      await updateDoc(userChatsRef, {
        [chatId]: deleteField(),
      });
      dispatchChats({ type: "DELETE_CHAT", chatId: chatId });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <SChat onClick={handleSelectChat} isActive={isActive}>
      <ChatAvatar src={userInfo.photoURL} alt="friend" />
      <SPreviewContainer>
        <ChatsDetails>
          <FriendsName>{userInfo.displayName}</FriendsName>
          <Dot></Dot>
          <LastMessageDate>{chatDate}</LastMessageDate>
          <SDeleteOutlineIcon onClick={(e) => handleDeleteChat(e, chatId)} />
        </ChatsDetails>
        <LastMessage>{formattedLastMessage}</LastMessage>
      </SPreviewContainer>
    </SChat>
  );
};

export default ChatPreview;

const SDeleteOutlineIcon = styled(DeleteOutlineIcon)`
  font-size: 2.2rem !important;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const SChat = styled.div<{ isActive: boolean }>`
  position: relative;
  z-index: 10;
  display: flex;
  padding: 2rem 2rem 2rem 1rem;
  background-color: #fff;
  color: #bbb;
  gap: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 0.5rem #d9d9d9;
  backface-visibility: hidden;
  transition: all 0.2s;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0rem 0rem #d9d9d9;
  }

  &:has(${SDeleteOutlineIcon}:active) {
    transform: translateY(0);
    box-shadow: 0 0.2rem 0.5rem #d9d9d9;
  }

  ${({ isActive }) =>
    isActive &&
    `
     background-color: #34aa44;
     color: #fff; 
     border: 1px solid #34aa44;
     transform: translateY(0);
     box-shadow: 0 0 0 #d9d9d9;

     &:has(${SDeleteOutlineIcon}:active) {
      box-shadow: 0 0 0 #d9d9d9;
    }

    ${FriendsName}, ${SDeleteOutlineIcon}{
      color: #fff;
    }
    ${Dot}{
      background-color: #fff;
    }
    ${LastMessage}{
      border-top: 1px solid rgba(255,255,255,.5);
    }
    
    `}

  &:hover {
    filter: brightness(95%);
  }
`;

const LastMessageDate = styled.span`
  font-size: 1.4rem;
  margin-right: auto;
  font-weight: 300;
`;

const ChatAvatar = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  align-self: flex-start;
  transform: translateY(-0.4rem);
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const ChatsDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const Dot = styled.div`
  width: 0.7rem;
  aspect-ratio: 1/1;
  background-color: #bbb;
  border-radius: 2rem;
`;

const SPreviewContainer = styled.div`
  flex: 1;
  gap: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const FriendsName = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: #34aa44;
  letter-spacing: 0.5px;
`;

const LastMessage = styled.span`
  font-size: 1.6rem;
  width: 100%;
  padding-top: 1rem;
  border-top: 2px solid #eee;
  word-wrap: break-word;
  word-break: break-word;
`;

export const DotsMenuIcon = styled.div`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #bbb;
  border-radius: 20rem;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
  }

  &::before {
    left: -7px;
  }

  &::after {
    right: -7px;
  }
`;
