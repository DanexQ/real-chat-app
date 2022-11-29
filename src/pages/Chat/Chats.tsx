import { useContext } from "react";
import styled from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import SearchIcon from "@mui/icons-material/Search";
import ChatsFilters from "./ChatsFilters";
import ChatPreview from "./ChatPreview";
import SearchBar from "../../components/SearchBar";
import { ChatsContext } from "../../context/ChatsContext";

const Chats = () => {
  const { data } = useContext(ChatContext);
  const { chatsState } = useContext(ChatsContext);
  const chats =
    !!chatsState.filteredChats &&
    chatsState.filteredChats.map((chat) => (
      <ChatPreview
        key={chat[0]}
        {...chat[1]}
        chatId={chat[0]}
        isActive={chat[0] === data.chatID}
      />
    ));

  return (
    <SChatsContainer>
      <SearchBar />
      <SChatsTitle>
        <STitle>Chats</STitle>
        <SChatsMenu>
          <DotsMenuIcon />
        </SChatsMenu>
      </SChatsTitle>
      <ChatsFilters />
      {chats}
    </SChatsContainer>
  );
};

export default Chats;

const SChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f3f4;
  height: 100vh;
  gap: 3rem;
  padding: 3rem 2rem;
  min-width: 30rem;
  flex: 0.9;
`;

const SChatsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const STitle = styled.h2`
  font-size: 2.7rem;
  color: #34aa44;
`;

const SChatsMenu = styled.div`
  cursor: pointer;
  padding: 1rem;
  transform: translateX(1rem);

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
  background-color: #34aa44;
  border-radius: 20rem;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: "";
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: inherit;
  }

  &::before {
    top: -7px;
  }

  &::after {
    top: 7px;
  }
`;

const SSearchInput = styled.input`
  width: 100%;
  font-size: 1.8rem;
  padding: 1rem 4rem 1rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.7);

    &::placeholder {
      color: rgba(0, 0, 0, 0.7) !important;
    }

    + svg {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  &::placeholder {
    transition: all 0.2s;
    color: rgba(0, 0, 0, 0.3) !important;
  }
`;

const SSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  right: 1rem;
  font-size: 2.5rem !important;
  transform: translateY(-54%);
  cursor: pointer;
  transition: color 0.2s !important;
  color: rgba(0, 0, 0, 0.3);
`;
