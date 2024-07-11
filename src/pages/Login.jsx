import { FaFingerprint,FaGoogle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Login = () => {
    return (
        <section className='pb-12 px-5'>
            <div className='lg:w-1/2 mx-auto w-full lg:p-5 flex flex-col'>
                <div className='my-5 text-center px-4'>
                    <h1 className='text-4xl font-bold'>Login Your Account</h1>
                    <p className='mt-1'>Hi Dear, Enter your email address and password, and start your learning journey.</p>


                </div>

                <div className='rounded-xl custom-shadow flex flex-col justify-center items-center gap-5 lg:p-10 p-5'>
                    <div className='w-full'>
                        <label htmlFor="email" className='mb-2'>Email Address<span className='text-red-500'>*</span></label>
                        <div className='flex items-center gap-4 p-3 custom-shadow rounded-2xl border'>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="at"
                                style={{ width: '20px', height: '20px' }}
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"
                                />
                            </svg>


                            <input type="email" placeholder='Enter Your Email' className='bg-transparent' />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="password" className='mb-2'>Password<span className='text-red-500'>*</span></label>
                        <div className='flex items-center gap-4 p-3 custom-shadow rounded-2xl border'>
                            <FaFingerprint />
                            <input type="password" placeholder='Set Your Password' className='bg-transparent' />
                        </div>
                    </div>
                    <div className='w-full'>
                        <button className='text-[#006D77]'>Forgot Password</button>
                    </div>
                    <button className='bg-gray-900 text-white rounded-full px-6 py-2 text-lg flex items-center  justify-between gap-5'>

                        Login now
                        <FaArrowRightLong />
                    </button>
                    <hr className='w-full'/>
                    <button className='flex items-center  custom-shadow py-2 text-lg rounded-full gap-4 px-6'>
                        <FaGoogle/>
                        Sign In with Google
                    </button>

                </div>
                <p className='text-center text-[#006D77] mt-5 text-sm'>Don't have an account ? Sign Up</p>
            </div>
        </section>
    )
}

export default Login
