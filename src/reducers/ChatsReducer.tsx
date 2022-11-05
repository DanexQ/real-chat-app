import { ChatsContextActionType } from "../context/ChatsContext";
import { ChatPreviewProps, UserInfoType } from "../pages/Chat/ChatPreview";

export type INITIAL_STATE_TYPE = [string, ChatPreviewProps][] | undefined;

export const ChatsReducer = (
  state: INITIAL_STATE_TYPE,
  action: ChatsContextActionType
) => {
  switch (action.type) {
    case "CHANGE_CHATS":
      return action.payload ? Object.entries(action.payload) : action.payload;
    case "CLEAR_STATE":
      return [];
    default:
      throw new Error("CHATS REDUCER: TYPE NOT FOUND", action);
  }
};
