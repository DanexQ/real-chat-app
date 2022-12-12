import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Messages from "./components/Messages";
import ChatInput from "./components/ChatInput";
import { useContext } from "react";
import { ChatContext } from "@context/ChatContext";
import * as S from "./styles/StyledChat";

const Chat = () => {
  const { chat } = useContext(ChatContext);

  return (
    <S.ChatContainer>
      {!chat.chatID ? (
        <S.NotChoosedChat>Start chatting with your friend!</S.NotChoosedChat>
      ) : (
        <>
          <S.ChatDetails>
            <S.ChatAvatar src={chat.user.photoURL} alt="friend" />
            <S.DisplayName>{chat.user.displayName}</S.DisplayName>
            <S.ChatOptions>
              <CameraAltOutlinedIcon />
              <MoreHorizIcon />
            </S.ChatOptions>
          </S.ChatDetails>
          <Messages />
          <ChatInput />
        </>
      )}
    </S.ChatContainer>
  );
};

export default Chat;
