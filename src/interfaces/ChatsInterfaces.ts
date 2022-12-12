import { DocumentData } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

export type FilterTypes = "all" | "user" | "group";

export type ChatsContextActionType =
  | {
      type: "SET_STATE";
      payload: ChatsPayload;
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

export interface ChatPreviewProps extends ChatType {
  isActive: boolean;
  chatId: string;
}

export type ChatType = {
  date: Timestamp;
  lastMessage: { text: string };
  userInfo: UserInfoType;
  chatType: "user" | "group";
};

export type INITIAL_STATE_TYPE = {
  filter: FilterTypes;
  chats: [string, ChatType][];
  filteredChats: [string, ChatType][];
};

export type ChatsPayload = {
  [x: string]: ChatType;
};
