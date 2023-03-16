import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useLocalStorage } from './useLocalStorage';

export interface User {
   id: string;
   name: string;
   email: string;
   token?: string;
}

export const useUser = () => {
   const { user } = useContext(AuthContext);
   const { setItem } = useLocalStorage();

   const addUser = (user: User) => {
      setItem('user', JSON.stringify(user));
   };

   const removeUser = () => {
      setItem('user', '');
   };

   return { user, addUser, removeUser };
};