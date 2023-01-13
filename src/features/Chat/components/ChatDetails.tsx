import { ChatContext } from "@context/ChatContext";
import { useContext, useState } from "react";
import * as S from "../styles/StyledChatDetails";
import ChatMoreOptions from "./ChatMoreOptions";
import ModalOverlay from "src/components/modalOverlay/ModalOverlay";

const ChatDetails = () => {
  const { chat } = useContext(ChatContext);
  const [showModal, setShowModal] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(true);

  const handleClickModalVisibility = () => {
    hideAnimation && setShowModal(true);
    setHideAnimation((prevHide) => !prevHide);
  };

  return (
    <S.ChatDetails>
      <S.ChatAvatar src={chat.user.photoURL} alt="friend" />
      <S.DisplayName>{chat.user.displayName}</S.DisplayName>
      <S.ChatOptions>
        <S.MoreOptionsIcon
          showmodal={showModal.toString()}
          onClick={handleClickModalVisibility}
          onBlur={handleClickModalVisibility}
        />
        {showModal && (
          <ChatMoreOptions hide={hideAnimation} setShowModal={setShowModal} />
        )}
      </S.ChatOptions>
      {showModal && <ModalOverlay handleClick={handleClickModalVisibility} />}
    </S.ChatDetails>
  );
};

export default ChatDetails;
