import React, { useContext } from 'react'
import navlinks from '../data/navlinks'
import { Link} from 'react-router-dom'
import {CiDark,CiLight} from "react-icons/ci"
import { ThemeContext } from '../context/ThemeContext'
const Navbar = () => {
    const {isDarkMode,setIsDarkMode} = useContext(ThemeContext)
  return (
    <nav className='flex  items-center justify-between px-5 py-2 shadow-lg'>
        <Link to={"/"}>
            <img src="./logo.png" alt="techsimplus_logo" width={50}/>
        </Link>
        <ul className='md:flex gap-5 items-center text-lg hidden'>
            {
                navlinks.map((link)=>{
                    return <Link key={link.id} to={link.path}>{link.name}</Link>
                })
            }
        </ul>
       <div className='flex items-center gap-2'>
       <button className='text-2xl' onClick={()=>setIsDarkMode(!isDarkMode)}>
       {
            isDarkMode ? <CiLight/> : <CiDark/>
        }
       </button>
       <Link className='text-2xl' to={"/login"}>Login</Link>
       </div>
    </nav>
  )
}

export default Navbar
