import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='46586883094-shuekku4ieaems3i92bcvrkog2sq1ra1.apps.googleusercontent.com'>
    <StrictMode>
    <App />
  </StrictMode>
  </GoogleOAuthProvider>
  )
