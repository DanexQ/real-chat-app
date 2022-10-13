import Login from "./pages/Login";
import styled from "styled-components";
import { Route, Routes } from "react-router";
import Register from "./pages/Register";
import Home from "./components/Home";

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
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
  background-color: #9fd5fd;
`;
