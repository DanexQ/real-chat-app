import { ChatContextState, ChatActions } from "../interfaces/ChatInterfaces";

export const ChatReducer = (state: ChatContextState, action: ChatActions) => {
  switch (action.type) {
    case "CHANGE_USER_CHAT":
      if (state.user.uid === action.payload.user.uid) return { ...state };
      return {
        user: action.payload.user,
        chatID: action.payload.combinedID,
      };
    case "SHOW_STATE":
      console.log(state);
      return state;
    case "CLEAR_STATE":
      return {
        chatID: "null",
        user: {
          displayName: "",
          photoURL: "",
          uid: "",
        },
      };
    default:
      throw new Error("CHAT REDUCER: TYPE NOT FOUND", action);
  }
};
