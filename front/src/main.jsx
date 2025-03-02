import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignupPage from './Test'
import LoginPage from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage/>
  </StrictMode>,
)
