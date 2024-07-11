import React, { useContext } from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
 const {isDarkMode} =useContext(ThemeContext)
  return (
    
    <div className={isDarkMode ? 'bg-gray-900 text-white':'text-gray-900 bg-white'}>
    <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
   
  )
}

export default App
