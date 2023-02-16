import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={new QueryClient()}>
      <React.StrictMode>
         <BrowserRouter>
               <App />
         </BrowserRouter>
      </React.StrictMode>
   </QueryClientProvider>
)
