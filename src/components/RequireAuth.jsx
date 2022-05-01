import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";

export const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
