import { lazy } from 'react';
import pMinDelay from 'p-min-delay';

const Home = lazy(() => pMinDelay(import('../pages/Home/Home'), 500));
const Signup = lazy(() => pMinDelay(import('../pages/Signup/Signup'), 500));
const Marketplace = lazy(() => pMinDelay(import('../pages/Marketplace/Marketplace'), 500));
const Product = lazy(() => pMinDelay(import('../pages/Product/Product'), 500));
const Stores = lazy(() => pMinDelay(import('../pages/Stores/Stores'), 500));
const Cart = lazy(() => pMinDelay(import('../pages/Cart/Cart'), 500));
const Verification = lazy(() => pMinDelay(import('../pages/Verification/Verification'), 500));
const Email = lazy(() => pMinDelay(import('../pages/Verification/Email'), 500));
const Login = lazy(() => pMinDelay(import('../pages/Login/Login'), 500));


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
   {
      element: <Verification />,
      path: '/verification/:type',
   },
   {
      element: <Email />,
      path: '/email/verify/:code',
   },
   {
      element: <Cart />,
      path: '/cart',
   },
   {
      element: <Login />,
      path: '/login',
   },
];