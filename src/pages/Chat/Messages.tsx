import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import Message from "./Message";

const Messages = () => {
  const { chat } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const mappedMessages = messages?.map((message, index) => (
    <Message key={index} message={message} />
  ));

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", chat.chatID), (doc) => {
      doc.exists() && setMessages(doc.data()?.messages);
    });
    return () => {
      unsub();
    };
  }, [chat.chatID]);

  return (
    <SMessagesContainer>
      <SMessages>{mappedMessages}</SMessages>
    </SMessagesContainer>
  );
};

export default Messages;

const SMessages = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 3rem 3rem 3rem;
`;

const SMessagesContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  background-color: #f5f3f4;
  height: calc(100% - 18rem);
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;
