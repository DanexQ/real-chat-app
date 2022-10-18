import { Timestamp } from "firebase/firestore";
import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { Avatar } from "./Navbar";

type MessageType = {
  date: Timestamp;
  id: string;
  senderId: string;
  text?: string;
  image?: string;
};

const Message = ({ message }: { message: MessageType }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <>
      {message.senderId === currentUser?.uid ? (
        <MessageContainer owner={true}>
          <Avatar src={currentUser.photoURL!} alt="you" />
          <MessageContent>
            {message.image && <Image src={message.image} alt="img" />}
            {message.text && <MessageText>{message.text}</MessageText>}
          </MessageContent>
        </MessageContainer>
      ) : (
        <MessageContainer owner={false}>
          <Avatar src={data.user.photoURL} alt="friend" />
          <MessageText>{message.text}</MessageText>
        </MessageContainer>
      )}
    </>
  );
};

export default Message;

const MessageContainer = styled.div<{ owner: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${({ owner }) =>
    owner &&
    `flex-direction: row-reverse;
  justify-content: flex-start;`}
  align-items: flex-end;
  gap: 1rem;
`;

const MessageText = styled.span`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 1.6rem;
  border-radius: 1rem;
  max-width: 100%;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 0.2rem;
`;

const Image = styled.img`
  max-width: 20rem;
  max-height: 20rem;
`;
