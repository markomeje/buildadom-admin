import { lazy } from 'react';
import pMinDelay from 'p-min-delay';
import Store from '../pages/Stores/Stores';

const Home = lazy(() => pMinDelay(import('../pages/Home/Home'), 500));
const Signup = lazy(() => pMinDelay(import('../pages/Signup/Signup'), 500));
const Marketplace = lazy(() => pMinDelay(import('../pages/Marketplace/Marketplace'), 500));
const Product = lazy(() => pMinDelay(import('../pages/Product/Product'), 500));
const Stores = lazy(() => pMinDelay(import('../pages/Stores/Stores'), 500));


export const routes = [
   {
      element: <Home />,
      path: '/',
   },
   {
      element: <Marketplace />,
      path: '/marketplace',
   },
   {
      element: <Product />,
      path: '/product',
   },
   {
      element: <Stores />,
      path: '/stores',
   },
   {
      element: <Signup />,
      path: '/signup',
   },
];