import { FilterTypes } from "../context/ChatsContext";
import {
  ChatsContextActionType,
  ChatType,
} from "../interfaces/ChatsInterfaces";

export type INITIAL_STATE_TYPE = {
  filter: FilterTypes;
  chats: [string, ChatType][] | undefined;
  filteredChats: [string, ChatType][] | undefined;
};

export const ChatsReducer = (
  state: INITIAL_STATE_TYPE,
  action: ChatsContextActionType
): INITIAL_STATE_TYPE => {
  switch (action.type) {
    case "SET_STATE":
      console.log(Object.entries(action.payload));
      const sortedChats = Object.entries(action.payload);
      return {
        ...state,
        chats: sortedChats,
      };
    case "FILTER_CHATS":
      const filteredChats = state.chats?.filter((chat) =>
        action.chatType !== "all" ? chat[1].chatType === action.chatType : chat
      );
      return {
        ...state,
        filter: action.chatType,
        filteredChats: filteredChats,
      };
    case "DELETE_CHAT":
      const newState = state.chats?.filter((chat) => chat[0] !== action.chatId);
      const newfilteredChats = state.filteredChats?.filter(
        (chat) => chat[0] !== action.chatId
      );
      return { ...state, filteredChats: newfilteredChats, chats: newState };
    case "ADD_USER":
      return { ...state };
    case "CLEAR_STATE":
      return { filter: "all", chats: [], filteredChats: [] };
    default:
      throw new Error("CHATS REDUCER: TYPE NOT FOUND", action);
  }
};
