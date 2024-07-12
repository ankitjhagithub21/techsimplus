import React, { useContext } from 'react'
import {ThemeContext} from "../context/ThemeContext"

const Review = () => {
    const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className='lg:w-1/3 md:w-1/2 w-full my-5 p-3 relative'>
    <div className={`rounded-xl ${isDarkMode ? 'bg-white text-gray-900':'bg-gray-900 text-white'} p-8`}>
        <div className='absolute -top-5 flex items-center'>
            <img src="https://ankitjha.vercel.app/profile.png" alt="student" className='w-12 rounded-full' />
            <div>
                <h2 className={`text-xl  ${isDarkMode ? 'text-white':' text-gray-900'} font-bold`}>Ankit Jha</h2>
                <img src="https://techsimplus.com/_next/image?url=%2Fassets%2Fimgs%2Fcompanies%2Ftcs.png&w=128&q=75" alt="company" width={60} />
            </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vero porro similique esse modi! Deleniti quos aperiam dolores ex pariatur, qui aspernatur nisi eos itaque, libero illo doloremque, aliquam quam in quidem! Libero tempore dicta aut obcaecati eligendi debitis sequi ullam fugit? Alias iusto, magni ipsam mollitia maiores</p>
    </div>


</div>
  )
}

export default Review
