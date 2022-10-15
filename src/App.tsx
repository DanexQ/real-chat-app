import Login from "./pages/Login";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./components/Home";
import { useContext, useEffect } from "react";
import AuthContext from "./context/AuthContext";
import { auth } from "./firebase";
import AuthRoute from "./components/AuthRoute";

function App() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("app", currentUser);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!currentUser) {
      navigate("/login");
    }

    return <>{children}</>;
  };

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
