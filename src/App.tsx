import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/searchBar/SearchBar";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./features/Chat/Chat";
import Chats from "./features/Chats/Chats";

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
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(7rem, 10rem) minmax(12rem, 40rem) 1fr;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 7rem 1fr;
  }
`;
