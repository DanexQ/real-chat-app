import styled from "styled-components";
import { Avatar } from "./Navbar";
import { FriendsName } from "./Chats";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <ChatContainer>
      <ChatDetails>
        <ChatAvatar src={data.user.photoURL} alt="friend" />
        <FriendsName>{data.user.displayName}</FriendsName>
        <ChatOptions>
          <CameraAltIcon />
          <PersonAddIcon />
          <MoreHorizIcon />
        </ChatOptions>
      </ChatDetails>
      <Messages />
      <ChatInput />
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
