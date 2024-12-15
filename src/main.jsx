import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// CSS links
import './index.css'
import 'lenis/dist/lenis.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)