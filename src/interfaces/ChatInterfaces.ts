import { UserInfoType } from "./ChatsInterfaces";

export type ChatContextState = {
  chatID: string | null;
  user: UserInfoType;
};

export type ChatActions =
  | {
      type: "CHANGE_USER_CHAT";
      payload: {
        user: UserInfoType;
        combinedID: string;
      };
    }
  | {
      type: "SHOW_STATE";
    }
  | {
      type: "CLEAR_STATE";
    };

export interface ChatContextInterface {
  chat: ChatContextState;
  chatDispatch: ChatDispatchType;
}

export type ChatDispatchType = React.Dispatch<ChatActions>;
