import { ChatContext } from "@context/ChatContext";
import React, { useContext, useState } from "react";
import * as S from "../styles/StyledChatDetails";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatMoreOptions from "./ChatMoreOptions";

const ChatDetails = () => {
  const { chat } = useContext(ChatContext);
  const [showModal, setShowModal] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  const handleClickShowModal = () => {
    if (showModal) {
      new Promise(() => {
        setHideAnimation(true);
        setTimeout(() => {
          setShowModal(false);
        }, 1000);
      });
    } else setShowModal((prevValue) => !prevValue);
  };

  return (
    <S.ChatDetails>
      <S.ChatAvatar src={chat.user.photoURL} alt="friend" />
      <S.DisplayName>{chat.user.displayName}</S.DisplayName>
      <S.ChatOptions>
        <CameraAltOutlinedIcon />
        <MoreHorizIcon onClick={handleClickShowModal} />
        {showModal && <ChatMoreOptions hide={hideAnimation} />}
      </S.ChatOptions>
    </S.ChatDetails>
  );
};

export default ChatDetails;
