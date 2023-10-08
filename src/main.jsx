import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Components/Routers/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
    <HelmetProvider>
      <div className=' max-w-screen-xl mx-auto '>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
    </AuthProvider>
    



  </React.StrictMode>,
)
