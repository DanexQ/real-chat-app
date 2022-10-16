import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({
  children,
  passedFrom,
}: {
  children: React.ReactNode;
  passedFrom: string;
}) => {
  const { isAuthorized } = useContext(AuthContext);

  if (isAuthorized === false && passedFrom === "home")
    return <Navigate to="/login" replace />;
  if (
    isAuthorized === true &&
    (passedFrom === "login" || passedFrom === "register")
  )
    return <Navigate to="/" replace />;

  return <>{isAuthorized !== null && children}</>;
};

export default ProtectedRoute;
