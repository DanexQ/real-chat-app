import { Timestamp } from "firebase/firestore";
import React, { useContext } from "react";
import styled from "styled-components";
import { ChatContext } from "../context/ChatContext";
import { Avatar } from "./Navbar";

export type UserInfoType = {
  displayName: string;
  photoURL: string;
  uid: string;
};

interface ChatPreviewProps {
  date: Timestamp;
  lastMessage: { text: string };
  userInfo: UserInfoType;
}

const ChatPreview = ({ date, lastMessage, userInfo }: ChatPreviewProps) => {
  const { dispatch } = useContext(ChatContext);

  const handleSelect = (userInfo: UserInfoType) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };
  return (
    <SChat onClick={() => handleSelect(userInfo)}>
      <ChatAvatar src={userInfo.photoURL} alt="friend" />
      <SPreviewContainer>
        <ChatsDetails>
          <FriendsName>{userInfo.displayName}</FriendsName>
          <Dot></Dot>
          <LastMessageDate>3:30 PM</LastMessageDate>
          <SChatsMenu>
            <DotsMenuIcon />
          </SChatsMenu>
        </ChatsDetails>
        <LastMessage>
          {lastMessage?.text.length < 78
            ? lastMessage?.text
            : `${lastMessage?.text.slice(0, 78)}...`}
        </LastMessage>
      </SPreviewContainer>
    </SChat>
  );
};

export default ChatPreview;

const SChat = styled.div`
  display: flex;
  padding: 2rem;
  background-color: #34aa44;
  color: white;
  gap: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #343a40;
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
  background-color: white;
  border-radius: 2rem;
`;

const SPreviewContainer = styled.div`
  flex: 1;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const FriendsName = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const LastMessage = styled.div`
  font-size: 1.6rem;
  width: 100%;
  font-weight: 300;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`;

const SChatsMenu = styled.div`
  cursor: pointer;
  padding: 1rem;

  &:active {
    div {
      scale: 0.92;
    }
  }
`;

export const DotsMenuIcon = styled.div`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #fff;
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
