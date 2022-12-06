import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ChatIndex from "./pages/Chat/ChatIndex";
import SearchBar from "./components/searchBar/SearchBar";
import Sidebar from "./components/Sidebar";
import Chat from "./pages/Chat/Chat";
import Chats from "./pages/Chat/Chats";

function App() {
  return (
    <StyledApp>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Chats />
              <Chat />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <SearchBar />
              <Chat />
            </>
          }
        />
      </Routes>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
