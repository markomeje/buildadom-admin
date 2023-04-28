import { lazy } from 'react';
import pMinDelay from 'p-min-delay';

const Home = lazy(() => pMinDelay(import('../pages/Home/Home'), 500));
const Signup = lazy(() => pMinDelay(import('../pages/Signup/Signup'), 500));
const Marketplace = lazy(() => pMinDelay(import('../pages/Marketplace/Marketplace'), 500));
const Product = lazy(() => pMinDelay(import('../pages/Product/Product'), 500));
const Stores = lazy(() => pMinDelay(import('../pages/Stores/Stores'), 500));
const Cart = lazy(() => pMinDelay(import('../pages/Cart/Cart'), 500));
const Verification = lazy(() => pMinDelay(import('../pages/Verification/Verification'), 500));
const Login = lazy(() => pMinDelay(import('../pages/Login/Login'), 500));
const Marchant = lazy(() => pMinDelay(import('../pages/Marchant/Marchant'), 500));
const Reset = lazy(() => pMinDelay(import('../pages/Reset/Reset'), 500));
const Dashboard = lazy(() => pMinDelay(import('../pages/Dashboard/Dashboard'), 500));


export const routes = [
   {
      element: <Dashboard />,
      path: '/',
   },
   {
      element: <Marketplace />,
      path: '/marketplace',
      requireAuth: false,
   },
   {
      element: <Product />,
      path: '/product',
      requireAuth: false,
   },
   {
      element: <Stores />,
      path: '/stores',
      requireAuth: false,
   },
   {
      element: <Verification />,
      path: '/verification/:type',
      requireAuth: false,
   },
   {
      element: <Cart />,
      path: '/cart',
   },
   {
      element: <Login />,
      path: '/login',
   },
   {
      element: <Marchant />,
      path: '/marchant',
   },
];