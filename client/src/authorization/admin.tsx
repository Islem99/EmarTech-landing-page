import { Navigate } from "react-router-dom";
import { useAuth } from "../contextProviders/authentication";
import { FC } from "react";

export const AdminRoute: FC<any> = ({ children }) => {
  const { user } = useAuth() as any;
  return user ? children : <Navigate to="/login" />;
};