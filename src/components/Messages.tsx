import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data()?.messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatID]);

  return (
    <Siema>
      <MessagesContainer>
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </MessagesContainer>
    </Siema>
  );
};

export default Messages;

const MessagesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

const Siema = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  height: calc(100% - 180px);
`;
