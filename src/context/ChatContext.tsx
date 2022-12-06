import React, { createContext, useContext, useReducer } from "react";
import AuthContext from "./AuthContext";
import {
  ChatContextInterface,
  ChatContextState,
} from "../interfaces/ChatInterfaces";
import { ChatReducer } from "../reducers/ChatReducer";

export const ChatContext = createContext({} as ChatContextInterface);

export const ChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const INITIAL_STATE: ChatContextState = {
    chatID: "null",
    user: {
      displayName: "",
      photoURL: "",
      uid: "",
    },
  };

  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ chat: state, chatDispatch: dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
