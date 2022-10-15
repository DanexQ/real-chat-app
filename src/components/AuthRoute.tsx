import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import { auth } from "../firebase";

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => {
      AuthCheck();
    };
  }, [auth]);

  return <>{children}</>;
};

export default AuthRoute;
