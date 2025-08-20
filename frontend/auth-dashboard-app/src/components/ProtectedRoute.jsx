import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children, requiredAdmin }) {
  const { user } = useAuth();
  const userRole = useSelector((state) => state.userRole.role);

  if (!user) {
    //not login, redirect to login page
    return <Navigate to="/login" replace />; //replace可以不存在历史记录里
  }

  if (requiredAdmin && requiredAdmin !== userRole) {
    //user is not admin, redirect to dashboard

    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
