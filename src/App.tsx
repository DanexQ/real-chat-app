import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ChatIndex from "./pages/Chat/ChatIndex";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <StyledApp>
      <Sidebar />
      <Routes>
        <Route path="/" element={<ChatIndex />}>
          <Route path="search" element={<SearchBar />} />
        </Route>
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
  background-color: #495057;
`;
