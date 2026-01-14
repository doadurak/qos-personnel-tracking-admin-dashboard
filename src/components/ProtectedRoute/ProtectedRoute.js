// src/components/ProtectedRoute.js
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();

  if (!user) return <div>Login required</div>;

  if (!allowedRoles.includes(user.role))
    return <div>Access Denied</div>;

  return children;
};

export default ProtectedRoute;
