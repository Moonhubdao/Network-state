import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Buffer } from 'buffer/'
import './index.css'

// polyfills config 
globalThis.Buffer = Buffer

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
