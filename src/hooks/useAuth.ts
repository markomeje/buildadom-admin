import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
//import { useCookies } from 'react-cookie';

export const useAuth = () => {
  return useContext(AuthContext);
};