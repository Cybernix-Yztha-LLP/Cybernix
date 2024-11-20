import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="4081513342-o70n2ir4j8echl816vl64qscrp8rs5up.apps.googleusercontent.com"> {/* Replace with your actual Google Client ID */}
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);