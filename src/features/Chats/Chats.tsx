import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import ChatsFilters from "./ChatsFilters";
import ChatPreview from "./ChatPreview";
import SearchBar from "../../components/searchBar/SearchBar";
import { ChatsContext } from "../../context/ChatsContext";
import * as S from "./StyledChats";

const Chats = () => {
  const { chat: chatState } = useContext(ChatContext);
  const { chatsState } = useContext(ChatsContext);
  const chats =
    !!chatsState.filteredChats &&
    chatsState.filteredChats.map((chat) => (
      <ChatPreview
        key={chat[0]}
        {...chat[1]}
        chatId={chat[0]}
        isActive={chat[0] === chatState.chatID}
      />
    ));

  return (
    <S.ChatsContainer>
      <SearchBar />
      <S.ChatsTitle>
        <S.Title>Chats</S.Title>
        <S.ChatsMenu>
          <S.DotsMenuIcon />
        </S.ChatsMenu>
      </S.ChatsTitle>
      <ChatsFilters />
      <S.ChatsOverflow>{chats}</S.ChatsOverflow>
    </S.ChatsContainer>
  );
};

export default Chats;
