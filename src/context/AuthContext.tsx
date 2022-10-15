import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export interface AuthContextInterface {
  currentUser: User | null;
}

export const AuthContext = createContext({} as AuthContextInterface);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
      if (!user) navigate("/login");
      console.log("CONTEXT", user);
    });
    return () => {
      AuthCheck();
    };
  }, [auth]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
