import React, { useContext } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import {ThemeContext} from "../context/ThemeContext"
import { Link } from 'react-router-dom';
const Hero = () => {
    const {isDarkMode} = useContext(ThemeContext)
    return (
        <section>
            <div className='lg:w-2/3 mx-auto w-full p-5 flex flex-col text-center items-center justify-center py-12'>

                <h1 className='text-3xl font-bold'>Summer Internship <span className='text-[#006D77]'>By</span> </h1>
                <h1 className='text-4xl font-bold'> Developers From <span className='text-[#006D77]'>Top Tech</span> Companies</h1>
                <p className='lg:w-2/3 w-full text-lg mx-auto mt-2'>Learn most demanding and upcoming technologies.

                    Build real-world professional project get placed in top tech companies.

                    Get real time working-experience as top tech developers.</p>
                    <div className='flex items-center flex-wrap mt-5 justify-center gap-5'>
                        <Link className={`rounded-full flex items-center gap-3 lg:px-8 text-lg font-semibold leading-relaxed px-4 py-2 ${isDarkMode ?'bg-white text-gray-900':'bg-gray-900 text-white'}`} to={"/register"}>
                            Register Now 
                            
                            <FaArrowRightLong/>
                        </Link>
                        <button className='text-lg leading-relaxed flex items-center gap-3'>
                            <FaPlay color='#006D77'/>
                            Explore our programs
                            </button>
                    </div>
            </div>
        </section>
    )
}

export default Hero
