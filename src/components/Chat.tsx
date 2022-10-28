import styled from "styled-components";
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
      {data.chatID === "null" ? (
        <NotChoosedChat>Start chatting with your friend!</NotChoosedChat>
      ) : (
        <>
          <ChatDetails>
            <ChatAvatar src={data.user.photoURL} alt="friend" />
            <span>{data.user.displayName}</span>
            <ChatOptions>
              <CameraAltIcon />
              <PersonAddIcon />
              <MoreHorizIcon />
            </ChatOptions>
          </ChatDetails>
          <Messages />
          <ChatInput />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const NotChoosedChat = styled.div`
  width: 100%;
  height: 100%;
  color: #4bb3fd;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f3f4;
`;

const ChatContainer = styled.div`
  flex: 3 1;
  height: 100vh;
  border-left: 1px solid #d3d3d3;
`;

const ChatDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  height: 9rem;
  background-color: #f5f3f4;
`;

const ChatAvatar = styled.img`
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
