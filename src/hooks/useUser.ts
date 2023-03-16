import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface User {
   id: string;
   name: string;
   email: string;
   token?: string;
}

export const useUser = () => {
   const [ user ] = useState(null);
   const { setItem } = useLocalStorage();

   const addUser = (user: User) => {
      setItem('user', JSON.stringify(user));
   };

   const removeUser = () => {
      setItem('user', '');
   };

   return { user, addUser, removeUser };
};