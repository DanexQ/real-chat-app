import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../firebase";
import { ChatsReducer, INITIAL_STATE_TYPE } from "../reducers/ChatsReducer";
import AuthContext from "./AuthContext";

export type ChatsContextActionType =
  | {
      type: "CHANGE_CHATS";
      payload: DocumentData | undefined;
    }
  | {
      type: "CLEAR_STATE";
    };

interface ChatsContextInterface {
  chats: INITIAL_STATE_TYPE;
}

export const ChatsContext = createContext({} as ChatsContextInterface);

export const ChatsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const INITIAL_STATE: INITIAL_STATE_TYPE = [];
  const { currentUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(ChatsReducer, INITIAL_STATE);

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(doc(db, "userChats", currentUser!.uid), (doc) => {
      dispatch({ type: "CHANGE_CHATS", payload: doc.data() });
    });

    return () => {
      unsub();
      dispatch({ type: "CLEAR_STATE" });
    };
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <ChatsContext.Provider value={{ chats: state }}>
      {children}
    </ChatsContext.Provider>
  );
};
