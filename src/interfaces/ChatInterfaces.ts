import { UserInfoType } from "../pages/Chat/ChatPreview";

export type ChatContextState = {
  chatID: string;
  user: UserInfoType;
};

export type ChatActions =
  | {
      type: "CHANGE_USER_CHAT";
      payload: UserInfoType;
    }
  | {
      type: "SHOW_STATE";
    }
  | {
      type: "CLEAR_STATE";
    };

export interface ChatContextInterface {
  data: ChatContextState;
  dispatch: React.Dispatch<ChatActions>;
}
