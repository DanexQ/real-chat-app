import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import Message from "./Message";
import * as S from "./StyledMessages";

const Messages = () => {
  const { chat } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const mappedMessages = messages?.map((message, index) => (
    <Message key={index} message={message} />
  ));

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", chat.chatID), (doc) => {
      console.log(doc.data());
      doc.exists() && setMessages(doc.data()?.messages);
    });
    return () => {
      unsub();
    };
  }, [chat.chatID]);

  return (
    <S.MessagesContainer>
      <S.Messages>{mappedMessages}</S.Messages>
    </S.MessagesContainer>
  );
};

export default Messages;
