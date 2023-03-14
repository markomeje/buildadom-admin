import { Suspense, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import GlobalLoader from './components/Loaders/GlobalLoader'
import { routes } from './data/routes';
import './App.scss';

export default function App() {
   return (
      <Suspense fallback={<GlobalLoader />}>
         <Navbar />
         <Routes>
            {routes.map((route, index) => {
               let Element: React.ReactNode | null = route.element;
               return (<Route path={route.path} element={Element} key={index} />)
            })}
         </Routes>
      </Suspense>
   )
}
