import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

function App() {
  return (
    <StyledApp>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}>
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
