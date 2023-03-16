import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type childrenProps = {
   children: ReactNode,
};

export interface User {
   id: string;
   name: string;
   email: string;
   token?: string;
};

export interface Auth {
   status: boolean;
   role: string;
};

interface AuthContext {
   user: User;
   auth: Auth;
   login: (user: User) => void;
   logout: () => void;
};

export const AuthContext = createContext<AuthContext>({
   user: {
      id: '',
      name: '',
      email: '',
      token: ''
   },
   auth: {
      status: false,
      role: ''
   },
   login: () => {},
   logout: () => {},
});

export function AuthProvider({ children }: childrenProps) {
   const [ user, setUser ] = useState<User>({
      id: '',
      name: '',
      email: '',
      token: ''
   });

   const [auth, setAuth] = useState({
      status: false,
      role: ''
   });

   const { setItem, getItem } = useLocalStorage();

   const login = (user: User) => {
      setItem('user', JSON.stringify(user));
      setUser((prev: User) => ({
         ...prev,
         id: user.id,
         name: user.name,
         email: user.email,
         token: user.token,
      }));

      setAuth((prev) => ({
         ...prev,
         status: true
      }));
   };

   const logout = () => {
      setItem('user', '');
      setUser((prev: User) => ({
         ...prev,
         id: '',
         name: '',
         email: '',
         token: ''
      }));

      setAuth((prev) => ({
         ...prev,
         status: false
      }));
   };

   useEffect(() => {
      async function check() {
         const prev = getItem('user');
         if (prev) {
            setUser(JSON.parse(prev));
         }
      }

      check();
   }, []);

   const memo = useMemo(() => ({
      login,
      logout,
      auth,
      user,
   }), [user]);

   return (<AuthContext.Provider value={memo}>
      {children}
   </AuthContext.Provider>)
};