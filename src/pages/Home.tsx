import styled from "styled-components";
import Chat from "../components/Chat";
import Chats from "../components/Chats";

const Home = () => {
  return (
    <HomePage>
      <Chats />
      <Chat />
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
