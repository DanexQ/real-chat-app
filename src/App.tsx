import LoginForm from "./components/LoginForm";
import styled from "styled-components";
import { Route, Routes } from "react-router";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
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
