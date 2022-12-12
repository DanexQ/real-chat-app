import {
  ChatsContextActionType,
  INITIAL_STATE_TYPE,
} from "../interfaces/ChatsInterfaces";

export const ChatsReducer = (
  state: INITIAL_STATE_TYPE,
  action: ChatsContextActionType
): INITIAL_STATE_TYPE => {
  switch (action.type) {
    case "SET_STATE":
      const sortedChats = Object.entries(action.payload).sort(
        (a, b) => b[1].date.toDate().getTime() - a[1].date.toDate().getTime()
      );
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
