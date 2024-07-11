import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ThemeContextProvider } from './context/ThemeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>

    </BrowserRouter>
  </React.Fragment>,
)
