import React, { useContext } from 'react'
import { Signature, AtSign, Fingerprint, MoveRight } from 'lucide-react'
import { ThemeContext } from '../context/ThemeContext'
import { FaGoogle } from 'react-icons/fa6'
const Register = () => {
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <section>
            <div className="lg:w-1/2 px-5 w-full mx-auto">
               
                <div className='my-5 text-center px-4'>
                    <h1 className='text-4xl font-bold'>Register Now</h1>
                    <p className='mt-1'>Hi Dear, Want to start you new learning journey, wants to learn most demanding technologies and achieve your dream career, Join TechSimPlus family now.</p>
                </div>
                <div className='flex flex-col custom-shadow rounded-xl px-5 pb-10'>
                <div className='flex items-center w-full mb-5'>
                    <div className='w-1/3 flex flex-col items-center'>
                        <span>Login Details</span>
                        <div className='h-4 w-full rounded-full bg-[#006D77]'></div>
                    </div>
                    <div className='w-1/3 flex flex-col items-center'>
                        <span>Login Details</span>
                        <div className='h-4 w-full rounded-full bg-gray-100'></div>
                    </div>
                    <div className='w-1/3 flex flex-col items-center'>
                        <span>Login Details</span>
                        <div className='h-4 w-full rounded-full bg-gray-100'></div>
                    </div>
                </div>

                    <div className='flex flex-wrap w-full'>
                        <div className='flex flex-col lg:w-1/2 w-full p-1 '>
                            <label htmlFor="name" className='ml-2'>Full Name<span className='text-red-500'>*</span></label>
                            <div>
                                <div className='px-4 py-3 flex items-center gap-3  rounded-full custom-shadow' >
                                    <Signature size={20} />
                                    <input type="text" placeholder='Enter Your Name' className='bg-transparent' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:w-1/2 w-full p-1'>
                            <label htmlFor="email" className='ml-2'>Email Address<span className='text-red-500'>*</span></label>
                            <div className='px-4 py-3 gap-3 flex items-center rounded-full custom-shadow' >
                                <AtSign size={20} />
                                <input type="text" placeholder='Enter Your Email' className='bg-transparent' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full p-1'>
                            <label htmlFor="password">Password<span className='text-red-500'>*</span></label>
                            <div className='px-4 py-3 gap-3 flex items-center rounded-full custom-shadow'>
                                <Fingerprint size={20} />
                                <input type="text" placeholder='Enter Your Password' className='bg-transparent' />
                            </div>
                        </div>
                        <p className='mt-1'>You can use this password to login your account.</p>
                        <p className='my-3 '>  We will send you Verification code on your email address</p>
                        
                        <div className='flex items-center w-full justify-end'>
                            <button className={`flex items-center justify-center px-4 py-2 rounded-full ${isDarkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} gap-5`}>Next

                                <MoveRight />
                            </button>

                        </div>
                        <hr  className='w-full  my-5'/>
                      <div className='flex items-center justify-center w-full'>
                      <button className='flex items-center  custom-shadow py-2 text-lg rounded-full gap-4 px-6'>
                        <FaGoogle/>
                        Sign In with Google
                    </button>
                      </div>
                    </div>

                </div>
                <p className='text-center my-5'>Already have an account ? Login</p>

            </div>
        </section>
    )
}

export default Register
