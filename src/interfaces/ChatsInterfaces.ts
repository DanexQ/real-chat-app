import { DocumentData } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

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

export interface ChatsContextInterface {
  chatsState: INITIAL_STATE_TYPE;
  dispatch: React.Dispatch<ChatsContextActionType>;
}

export type UserInfoType = {
  displayName: string;
  photoURL: string;
  uid: string;
};

export interface ChatPreviewProps {
  date: Timestamp;
  lastMessage: { text: string };
  userInfo: UserInfoType;
  isActive: boolean;
  chatId: string;
  chatType: "user" | "group";
}

export type INITIAL_STATE_TYPE = {
  filter: FilterTypes;
  chats: [string, ChatPreviewProps][] | undefined;
  filteredChats: [string, ChatPreviewProps][] | undefined;
};
