import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { Avatar } from "./Navbar";

export type UserInfoType = {
  displayName: string;
  photoURL: string;
  uid: string;
};

const Chats = () => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [chats, setChats] = useState<DocumentData | undefined>(undefined);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userChats", currentUser!.uid), (doc) => {
      setChats(doc.data());
    });

    return () => {
      unsub();
      dispatch({ type: "CLEAR_STATE" });
    };
    // eslint-disable-next-line
  }, [currentUser]);

  const handleSelect = (userInfo: UserInfoType) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };

  return (
    <ChatsContainer>
      <ChatsCounter>
        Your chats: {chats ? Object.keys(chats).length : "0"}
      </ChatsCounter>
      {chats &&
        Object.entries(chats).map((chat) => (
          <SChat key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
            <ChatAvatar src={chat[1].userInfo.photoURL} alt="friend" />
            <ChatDetails>
              <FriendsName>{chat[1].userInfo.displayName}</FriendsName>
              <LatestMessage>
                {chat[1].lastMessage?.text.length < 20
                  ? chat[1].lastMessage?.text
                  : `${chat[1].lastMessage?.text.slice(0, 20)}...`}
              </LatestMessage>
            </ChatDetails>
          </SChat>
        ))}
    </ChatsContainer>
  );
};

export default Chats;

const ChatsCounter = styled.span`
  color: #4bb3fd;
  font-size: 2rem;
  font-weight: 600;
`;

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  gap: 1rem;
  padding: 1rem 2rem;
  flex: 1;
`;

const SChat = styled.div`
  display: flex;
  gap: 2rem;
  background-color: #212529;
  cursor: pointer;

  &:hover {
    background-color: #343a40;
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
