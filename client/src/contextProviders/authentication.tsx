import { FC, createContext, useContext, useState } from "react";
import { getUserFromLocalStorage } from "../utils";

const AuthContext = createContext({});

export type PropType = {
  children: React.ReactNode 
}

export const AuthProvider : FC<PropType> = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
