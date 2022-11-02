import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
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
    <SMessagesContainer>
      <SMessages>
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </SMessages>
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
