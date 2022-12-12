import { doc, onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../firebase";
import {
  ChatsPayload,
  ChatsContextInterface,
  INITIAL_STATE_TYPE,
} from "../interfaces/ChatsInterfaces";
import { ChatsReducer } from "../reducers/ChatsReducer";
import AuthContext from "./AuthContext";

export const ChatsContext = createContext({} as ChatsContextInterface);

const INITIAL_STATE: INITIAL_STATE_TYPE = {
  filter: "all",
  chats: [],
  filteredChats: [],
};

export const ChatsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(ChatsReducer, INITIAL_STATE);

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(doc(db, "userChats", currentUser!.uid), (doc) => {
      dispatch({ type: "SET_STATE", payload: doc.data() as ChatsPayload });
    });

    return () => {
      unsub();
      dispatch({ type: "CLEAR_STATE" });
    };
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <ChatsContext.Provider value={{ chatsState: state, dispatch }}>
      {children}
    </ChatsContext.Provider>
  );
};
