import { Timestamp as TimestampType } from "firebase/firestore";
import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { Avatar } from "../../styles/Avatar";
import Timestamp from "react-timestamp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
  const { data } = useContext(ChatContext);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const isOwner = message.senderId === currentUser?.uid ? true : false;

  useEffect(() => {
    ref.current!.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  console.log(message);

  return (
    <SContainer ref={ref} isOwner>
      <SAvatar
        src={
          message.senderId === currentUser?.uid
            ? currentUser.photoURL!
            : data.user.photoURL
        }
        alt="you"
      />
      <SMessageLayout isOwner>
        <SDetails>
          <SSender>{message.senderName}</SSender>
          <SDate>
            <Timestamp
              relative
              date={message.date.toDate()}
              relativeTo={new Date()}
              autoUpdate
            />{" "}
            ago
          </SDate>
        </SDetails>
        <SContentLayout>
          <SMoreHorizIcon />
          <SContent>
            {!!message.image && <Image src={message.image} alt="img" />}
            {!!message.text && <SText>{message.text}</SText>}
          </SContent>
        </SContentLayout>
      </SMessageLayout>
    </SContainer>
  );
};

export default Message;

const SAvatar = styled(Avatar)`
  align-self: flex-start;
`;

const SMessageLayout = styled.div<{ isOwner: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const SDetails = styled.span`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0 0 0;
`;

const SSender = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #606060;
`;

const SDate = styled.div`
  display: none;
  align-self: center;
  font-size: 1rem;
  color: #b0b0b0;
`;

const SText = styled.span`
  padding: 1rem;
  background-color: #e0e0e0;
  font-size: 1.5rem;
  border-radius: 1rem;
  hyphens: auto;
  word-wrap: break-word;
  padding: 1.5rem;
`;

const SContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const SContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Image = styled.img`
  max-width: 20rem;
  max-height: 20rem;
`;

const SMoreHorizIcon = styled(MoreHorizIcon)`
  visibility: hidden;
  font-size: 3rem !important;
  align-self: center;
  color: #bfbfbf;
  cursor: pointer;
  transition: color 0.2s !important;

  &:hover {
    color: #34aa44;
  }

  &:active {
    scale: 0.95;
  }
`;

const SContainer = styled.div<{ isOwner: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 70%;
  margin: 0 auto 0 0;

  ${({ isOwner }) =>
    isOwner &&
    `
    margin: 0 0 0 auto;
      flex-direction: row-reverse;
      justify-content: flex-start;


      ${SText}{
        background-color: #34aa44;
        color: #fff;
      }

  `}

  &:hover {
    ${SDate} {
      display: block !important;
    }
    ${SMoreHorizIcon} {
      visibility: visible;
    }
  }

  gap: 1rem;
`;
