import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
// HoshRouter ist för BrowserRouter för att inte få 404 page, och det blir ett hash tecken.
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
