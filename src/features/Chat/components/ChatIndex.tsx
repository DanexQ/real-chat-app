import styled from "styled-components";
import Chat from "../Chat";
import Chats from "../../Chats/Chats";

const ChatMain = () => {
  return (
    <SChatMain>
      <Chats />
      <Chat />
    </SChatMain>
  );
};

export default ChatMain;

const SChatMain = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
