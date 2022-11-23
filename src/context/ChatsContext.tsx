import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../firebase";
import { ChatsReducer, INITIAL_STATE_TYPE } from "../reducers/ChatsReducer";
import AuthContext from "./AuthContext";

export type FilterTypes = "all" | "user" | "group";

export type ChatsContextActionType =
  | {
      type: "SET_STATE";
      payload: DocumentData | undefined;
    }
  | {
      type: "FILTER_CHATS";
      chatType: FilterTypes;
    }
  | {
      type: "DELETE_CHAT";
      chatId: string;
    }
  | {
      type: "ADD_USER";
      payload: DocumentData;
    }
  | {
      type: "CLEAR_STATE";
    };

interface ChatsContextInterface {
  chatsState: INITIAL_STATE_TYPE;
  dispatch: React.Dispatch<ChatsContextActionType>;
}

export const ChatsContext = createContext({} as ChatsContextInterface);

export const ChatsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const INITIAL_STATE: INITIAL_STATE_TYPE = {
    filter: "all",
    chats: [],
    filteredChats: [],
  };
  const { currentUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(ChatsReducer, INITIAL_STATE);

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(doc(db, "userChats", currentUser!.uid), (doc) => {
      dispatch({ type: "SET_STATE", payload: doc.data() });
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
