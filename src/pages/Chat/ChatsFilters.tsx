import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ChatsContext, FilterTypes } from "../../context/ChatsContext";

const ChatsFilters = () => {
  const { dispatch: dispatchChats, chatsState } = useContext(ChatsContext);
  const [activeFilter, setActiveFilter] = useState({
    all: true,
    user: false,
    group: false,
  });

  useEffect(() => {
    !!chatsState.chats &&
      dispatchChats({
        type: "FILTER_CHATS",
        chatType: "all",
      });
  }, [chatsState.chats]);

  const handleClickFilter = (filter: string) => {
    if (!activeFilter[filter as FilterTypes]) {
      setActiveFilter((prevState) => ({
        all: false,
        group: false,
        user: false,
        [filter]: !prevState[filter as keyof typeof prevState],
      }));
      dispatchChats({
        type: "FILTER_CHATS",
        chatType: filter as "all" | "user" | "group",
      });
    }
  };

  return (
    <SFiltersContainer>
      <SFilter
        activeFilter={activeFilter.all}
        onClick={() => handleClickFilter("all")}
      >
        All Chats
      </SFilter>
      <SFilter
        activeFilter={activeFilter.user}
        onClick={() => handleClickFilter("user")}
      >
        User Chats
      </SFilter>
      <SFilter
        activeFilter={activeFilter.group}
        onClick={() => handleClickFilter("group")}
      >
        Group Chats
      </SFilter>
    </SFiltersContainer>
  );
};

export default ChatsFilters;

const SFiltersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SFilter = styled.a<{ activeFilter: boolean }>`
  color: rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1rem;
    height: 0.3rem;
    width: 0%;
    border-radius: 2rem;
    background-color: transparent;
    transition: all 0.2s;
  }

  ${({ activeFilter }) =>
    activeFilter
      ? `
     color: #34aa44;
     &::before {
      width: 90%;
      background-color: #34aa44;
    }
  `
      : `
  &:hover{
    color: #34aa44;
  }
  `}
`;
