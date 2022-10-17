import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import { db } from "../firebase";
import { Avatar } from "./Navbar";

const Chats = () => {
  const { currentUser } = useContext(AuthContext);
  const [chats, setChats] = useState<DocumentData | undefined>(undefined);

  useEffect(() => {
    if (!currentUser) return;
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data());
    });

    return () => {
      unsub();
    };
  }, [currentUser?.uid]);

  return (
    <ChatsContainer>
      {chats &&
        Object.entries(chats).map((chat) => (
          <SChat key={chat[0]}>
            <ChatAvatar src={chat[1].userInfo.photoURL} alt="friend" />
            <ChatDetails>
              <FriendsName>{chat[1].userInfo.displayName}</FriendsName>
              <LatestMessage>
                {"siema gnoju jebanygrsda gioaoig  asdou".slice(0, 30)}...
              </LatestMessage>
            </ChatDetails>
          </SChat>
        ))}
    </ChatsContainer>
  );
};

export default Chats;

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SChat = styled.div`
  display: flex;
  gap: 2rem;
  background-color: #189ad3;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

const ChatAvatar = styled(Avatar)`
  width: 6rem;
  height: 6rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const ChatDetails = styled.div`
  flex: 1;
  display: flex;

  justify-content: center;
  flex-direction: column;
`;

export const FriendsName = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  margin-right: auto;
`;

const LatestMessage = styled.div`
  font-size: 1.5rem;
  color: white;
  justify-self: flex-start;
  align-self: flex-start;
`;
