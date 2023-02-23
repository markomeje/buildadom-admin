import axios from "axios";

export const Signup = (email: string, password: string) => {
   return axios.post(`/signup`, {
      email,
      password,
   });
};

export const Logout = () => {
   localStorage.removeItem('user');
};

export const GetCurrentUser = () => {
   const user = localStorage.getItem('user');
   return user ? JSON.parse(user) : null;
};

export const Login = (email: string, password: string) => {
  return axios.post(`/login`, {
      email,
      password,
   }).then((response) => {
      if (response.data.accessToken) {
         localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
   });
};
