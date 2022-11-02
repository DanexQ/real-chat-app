import styled from "styled-components";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

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
            <SDisplayName>{data.user.displayName}</SDisplayName>
            <ChatOptions>
              <CameraAltOutlinedIcon />
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
  padding: 0 4rem;
  gap: 1rem;
  height: 9rem;
  background-color: #f5f3f4;

  // #f5f3f4;
`;

const ChatAvatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
`;

const SDisplayName = styled.span`
  color: #34aa44;
  font-size: 2.3rem;
  font-weight: 700;
  margin-right: auto;
`;

const ChatOptions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  backface-visibility: hidden;

  svg {
    font-size: 3.5rem !important;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: color 0.2s;
    backface-visibility: hidden;

    &:hover {
      color: #34aa44;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
