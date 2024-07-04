import { Navigate } from "react-router-dom";
import { PropType, useAuth } from "../contextProviders/authentication";
import { FC } from "react";

export const UserRoute : FC<PropType>= ({ children }) => {
  const { user } = useAuth() as any;
  if(!user) {
    return <Navigate to="/login"/>;
  }

  return children;
}

