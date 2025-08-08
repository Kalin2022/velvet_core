import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Import Velvet Core test harness
import { routeCommand } from './zorathia.ts'

routeCommand("Velvet, can you center the text?")
routeCommand("Hello Velvet, how’s your day?")

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
