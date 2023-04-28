import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalLoader from './components/Loaders/GlobalLoader';
import { AuthProvider } from './contexts/AuthContext';
import './App.scss';

import { lazy } from 'react';
import pMinDelay from 'p-min-delay';
import Navbar from './components/Navbar/Navbar';

const Dashboard = lazy(() => pMinDelay(import('./pages/Dashboard/Dashboard'), 500));
const Identifications = lazy(() => pMinDelay(import('./pages/Identifications/Identifications'), 500));
const SingleIdentification = lazy(() => pMinDelay(import('./pages/Identifications/SingleIdentification'), 500));


export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<GlobalLoader />}>
        <Navbar showCenterLinks={false} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/identifications">
            <Route index element={<Identifications />} />
            <Route path="identification/:id" element={<SingleIdentification />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  )
}
