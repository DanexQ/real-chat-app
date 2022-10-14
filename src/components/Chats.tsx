import styled from "styled-components";
import { Avatar } from "./Navbar";

const Chats = () => {
  return (
    <ChatsContainer>
      <ChatAvatar
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="friend"
      />
      <ChatDetails>
        <FriendsName>Dylan McGregor</FriendsName>
        <LatestMessage>
          {"siema gnoju jebanygrsda gioaoig  asdou".slice(0, 30)}...
        </LatestMessage>
      </ChatDetails>
    </ChatsContainer>
  );
};

export default Chats;

const ChatsContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
  gap: 1rem;
  cursor: pointer;
  background-color: #189ad3;

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
