import { lazy } from 'react';
import pMinDelay from 'p-min-delay';

const Home = lazy(() => pMinDelay(import('./pages/Home/Home'), 500));
const Signup = lazy(() => pMinDelay(import('./pages/Signup/Signup'), 500));

export const routes = [
   {
      element: <Home />,
      path: '/',
   },
   {
      element: <Signup />,
      path: '/signup',
   },
];