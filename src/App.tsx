import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalLoader from './components/Loaders/GlobalLoader'
import { routes } from './data/routes';
import { AuthProvider } from './contexts/AuthContext';
import './App.scss';

export default function App() {
   return (
      <AuthProvider>
         <Suspense fallback={<GlobalLoader />}>
            <Routes>
               {routes.map((route, index) => {
                  let Element: React.ReactNode | null = route.element;
                  return (<Route path={route.path} element={Element} key={index} />)
               })}
            </Routes>
         </Suspense>
      </AuthProvider>
   )
}
