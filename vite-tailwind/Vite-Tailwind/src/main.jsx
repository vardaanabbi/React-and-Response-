import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h2 class= "bg-blue-950" >This is tailwind test</h2>
  </StrictMode>,
)
