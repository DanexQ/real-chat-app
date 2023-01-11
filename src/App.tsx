import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import SearchBar from "./components/searchBar/SearchBar";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./features/Chat/Chat";
import Chats from "./features/Chats/Chats";
import { useWindowWidth } from "./hooks/useWindowWidth";

function App() {
  const width = useWindowWidth();
  return (
    <StyledApp>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <StyledChat>
              {!width && <Chats />}
              <Chat />
            </StyledChat>
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
        {width && <Route path="/chats" element={<Chats />} />}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 9rem 1fr;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 7rem 1fr;
  }
`;

const StyledChat = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(30rem, 40rem) minmax(50rem, 1fr);

  @media only screen and (max-width: 900px) {
    grid-template-columns: 10rem 1fr;
    grid-template-rows: minmax(10rem, calc(100vh - 7rem));
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
