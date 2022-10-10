import LoginForm from "./components/LoginForm";
import styled from "styled-components";
import { formDetails } from "./constans";

function App() {
  return (
    <StyledApp>
      <LoginForm {...formDetails["login"]} />
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
