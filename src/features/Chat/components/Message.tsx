import { Timestamp as TimestampType } from "firebase/firestore";
import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "@context/AuthContext";
import { ChatContext } from "@context/ChatContext";
import Timestamp from "react-timestamp";
import * as S from "../styles/StyledMessage";

type MessageType = {
  date: TimestampType;
  id: string;
  senderId: string;
  text?: string;
  image?: string;
  senderName?: string;
};

const Message = ({ message }: { message: MessageType }) => {
  const { currentUser } = useContext(AuthContext);
  const { chat } = useContext(ChatContext);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const isOwner = message.senderId === currentUser?.uid;

  useEffect(() => {
    ref.current!.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <S.Container ref={ref} isOwner={isOwner}>
      <S.Avatar
        src={
          message.senderId === currentUser?.uid
            ? currentUser.photoURL!
            : chat.user.photoURL
        }
        alt="Profile Picture"
      />
      <S.MessageLayout isOwner={isOwner}>
        <S.Details>
          <S.Sender>{message.senderName}</S.Sender>
          <S.Date>
            <Timestamp
              relative
              date={message.date.toDate()}
              relativeTo={new Date()}
              autoUpdate
            />{" "}
            ago
          </S.Date>
        </S.Details>
        <S.ContentLayout>
          <S.MoreIcon />
          <S.Content>
            {!!message.image && <img src={message.image} alt="img" />}
            {!!message.text && <S.Text>{message.text}</S.Text>}
          </S.Content>
        </S.ContentLayout>
      </S.MessageLayout>
    </S.Container>
  );
};

export default Message;
