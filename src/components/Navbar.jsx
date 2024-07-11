import React from 'react'
import navlinks from '../data/navlinks'
import { Link} from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav className='flex  items-center justify-between px-5 py-2 shadow-lg'>
        <Link to={"/"}>
            <img src="./logo.png" alt="techsimplus_logo" width={50}/>
        </Link>
        <ul className='md:flex gap-5 items-center text-lg hidden text-gray-600'>
            {
                navlinks.map((link)=>{
                    return <Link key={link.id} to={link.path}>{link.name}</Link>
                })
            }
        </ul>
        <Link className='text-2xl text-[#006D77]' to={"/login"}>Login</Link>
    </nav>
  )
}

export default Navbar
