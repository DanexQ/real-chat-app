import { ChatContextState, ChatActions } from "../interfaces/ChatInterfaces";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { combineId } from "../utils/CombineId";

export const ChatReducer = (state: ChatContextState, action: ChatActions) => {
  const { currentUser } = useContext(AuthContext);

  switch (action.type) {
    case "CHANGE_USER_CHAT":
      if (state.user.uid === action.payload.uid) return { ...state };
      return {
        user: action.payload,
        chatID: combineId(currentUser!.uid, action.payload.uid),
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
      console.log("there is no case for that type");
      throw new Error();
  }
};
