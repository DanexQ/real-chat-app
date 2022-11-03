import React, { createContext, useContext, useReducer } from "react";
import AuthContext from "./AuthContext";
import { UserInfoType } from "../pages/Chat/ChatPreview";

type ChatContextState = {
  chatID: string;
  user: UserInfoType;
};

type ActionType =
  | {
      type: "CHANGE_USER";
      payload: UserInfoType;
    }
  | {
      type: "SHOW_STATE";
    }
  | {
      type: "CLEAR_STATE";
    };

interface ChatContextType {
  data: ChatContextState;
  dispatch: React.Dispatch<ActionType>;
}

export const ChatContext = createContext({} as ChatContextType);

export const ChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE: ChatContextState = {
    chatID: "null",
    user: {
      displayName: "",
      photoURL: "",
      uid: "",
    },
  };

  const chatReducer = (state: ChatContextState, action: ActionType) => {
    switch (action.type) {
      case "CHANGE_USER":
        if (state.user.uid === action.payload.uid) return { ...state };
        return {
          user: action.payload,
          chatID:
            currentUser!.uid > action.payload.uid
              ? currentUser!.uid + action.payload.uid
              : action.payload.uid + currentUser!.uid,
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

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
