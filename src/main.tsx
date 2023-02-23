import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import '../src/custom.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={new QueryClient()}>
      <React.StrictMode>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </React.StrictMode>
   </QueryClientProvider>
)
