import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import {FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa6"
const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto p-5">
        <div className='flex justify-between p-5 items-center flex-wrap gap-5 border-b py-5'>
          <div>
            <div className='flex items-center'>
              <img src="./logo.png" alt="logo" width={60} />
              <h1 className='text-3xl font-bold font-serif'>SimPlus+</h1>
            </div>
            <p>By Desprin Enterprises Private Limited</p>
          </div>
          <button className='flex items-center gap-4 px-6 py-2 bg-gray-900 text-white rounded-full'>
            Register Now
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className='container mx-auto p-5 flex flex-wrap'>
        <div className='flex flex-col lg:w-1/4 w-full p-5'>
          <h2 className='font-bold mb-5 text-xl'>Contact</h2>
          <p className=''>2nd Floor, 53 - C, Near Yadav Tea Stall, Indrapuri, Bhopal - 462021</p>
          <div className=' mt-5'>
            <p>+91 98937-62256</p>
            <p>training@techsimplus.com</p>
            <p>TechSimPlus Learnings is a subsidiary of Desprin</p>
            <p>Enterprises Private Limited</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 lg:px-10 px-5 lg:w-3/4 w-full flex-wrap'>
          <h2 className='font-bold text-xl mb-5'>About Us</h2>
          <div className='flex gap-5  flex-wrap'>
            <span>Blogs</span>
            <span>Events</span>
            <span>Mission & Vission</span>
            <span>Our Team</span>
            <span>Testimonials</span>
          </div>
        </div>
      </div>
      <div className='container mx-auto p-5  flex flex-wrap gap-3 justify-between items-center'>
        <div className='flex gap-5 flex-wrap font-bold text-gray-500  '>
          <p >© TechSimPlus Official 2024</p>
          <p>Privacy Policy</p>
        </div>
        <div className='flex items-center gap-3'>
          <div className='rounded-full bg-[#5CA1A8] p-2 text-2xl text-white'>
            <FaLinkedinIn/>
          </div>
          <div className='rounded-full bg-[#5CA1A8] p-2 text-2xl text-white'>
            <FaFacebook/>
          </div>
          <div className='rounded-full bg-[#5CA1A8] p-2 text-2xl text-white'>
            <FaTwitter/>
          </div>
          <div className='rounded-full bg-[#5CA1A8] p-2 text-2xl text-white'>
            <FaInstagram/>
          </div>
          
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
