
import Messages from "./components/Messages";
import ChatInput from "./components/ChatInput";
import { useContext } from "react";
import { ChatContext } from "@context/ChatContext";
import * as S from "./styles/StyledChat";
import ChatDetails from "./components/ChatDetails";

const Chat = () => {
  const { chat } = useContext(ChatContext);

  return (
    <S.ChatContainer>
      {!chat.chatID ? (
        <S.NotChoosedChat>Start chatting with your friend!</S.NotChoosedChat>
      ) : (
        <>
          <ChatDetails/>
          <Messages />
          <ChatInput />
        </>
      )}
    </S.ChatContainer>
  );
};

export default Chat;
