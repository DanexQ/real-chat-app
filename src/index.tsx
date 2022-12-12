import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { ChatsContextProvider } from "./context/ChatsContext";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "#34aa44",
  secondaryColor: "#f5f3f4",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatsContextProvider>
        <ChatContextProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/*"
                  element={
                    <ProtectedRoute passedFrom="home">
                      <App />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <ProtectedRoute passedFrom="login">
                      <Login />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <ProtectedRoute passedFrom="register">
                      <Register />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </ChatContextProvider>
      </ChatsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
