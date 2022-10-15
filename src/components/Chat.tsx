import React from "react";
import styled from "styled-components";
import { Avatar } from "./Navbar";
import { FriendsName } from "./Chats";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Chat = () => {
  return (
    <ChatContainer>
      <ChatDetails>
        <ChatAvatar
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="friend"
        />
        <FriendsName>Dylan McGregor</FriendsName>
        <ChatOptions>
          <CameraAltIcon />
          <PersonAddIcon />
          <MoreHorizIcon />
        </ChatOptions>
      </ChatDetails>
      <Messages />
      <ChatInput />
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        WYLOGUJ
      </button>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  background-color: #fff;
  grid-column: 3/7;
  grid-row: 1/2;
`;

const ChatDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 8rem;
  padding: 2rem;
  gap: 1rem;
  background-color: #189ad3;
`;

const ChatAvatar = styled(Avatar)`
  width: 5rem;
  height: 5rem;
`;

const ChatOptions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3rem !important;
    color: white;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #005073;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
