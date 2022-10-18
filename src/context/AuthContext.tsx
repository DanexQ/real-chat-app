import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebase";

export type currentUserType = User | null;

export interface AuthContextInterface {
  currentUser: currentUserType;
  isAuthorized: boolean | null;
}

export const AuthContext = createContext({} as AuthContextInterface);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<currentUserType>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
      setIsAuthorized(!!user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
