import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useCookies } from "react-cookie";

type childrenProps = {
   children: ReactNode,
};

export interface User {
   id: string;
   name: string;
   email: string;
   token?: string;
};

interface AuthContext {
   user: User | null,
   authenticated: boolean,
   login: () => void,
   logout: () => void,
};

export const AuthContext = createContext<AuthContext>({
   user: null,
   authenticated: false,
   login: () => null,
   logout: () => null,
});

export function AuthProvider({ children }: childrenProps) {
   const [ user, setUser ] = useState<User | null>(null);
   const [authenticated, setAuthenticated] = useState(false);
   const { setItem } = useLocalStorage();
   const [cookies, setCookies, removeCookie] = useCookies();

   const login = (user: User) => {
      setItem('user', JSON.stringify(user));
      setUser(user);
      setAuthenticated(true);
      setCookies('token', user.token);
   };

   const logout = () => {
      setItem('user', '');
      setUser(null);
      setAuthenticated(false);
      ['token'].forEach(cookie => removeCookie(cookie));
   };

   const memo = useMemo(() => ({
      cookies,
      login,
      logout,
      authenticated,
      user
   }), [cookies]);

   return (<AuthContext.Provider value={memo}>
      {children}
   </AuthContext.Provider>)
};