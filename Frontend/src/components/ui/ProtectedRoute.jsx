import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isVerified = location.state?.verified === true;

  if (!isVerified) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
