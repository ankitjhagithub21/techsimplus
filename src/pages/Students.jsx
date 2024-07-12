import React from 'react'
import students from '../data/students'
import Student from '../components/Student'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // import autoplay styles
import { Autoplay } from 'swiper/modules'; // import autoplay module

const Students = () => {
  return (
    <section>
      <div className='container mx-auto px-5 py-12 text-center '>
        <h1 className='text-3xl font-bold'>Our students got a placement</h1>
        <p className='mb-5'>These are students who joined Techsimplus to expand their careers and were placed on high-tech companies.</p>
        <Swiper
          modules={[Autoplay]} // include Autoplay module
          spaceBetween={50}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000} 
          breakpoints={{
            640: {
              slidesPerView: 2, // small devices
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // medium devices
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5, // large devices
              spaceBetween: 50,
            },
          }}
        >
          {students.map((student, index) => (
            <SwiperSlide key={index}>
              <Student 
                image={student.image} 
                name={student.name} 
                company={student.company} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <br />
        <Swiper
          modules={[Autoplay]} // include Autoplay module
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000} // add speed for smooth transitions
          breakpoints={{
            640: {
              slidesPerView: 2, // small devices
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // medium devices
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5, // large devices
              spaceBetween: 50,
            },
          }}
        >
          {students.map((student, index) => (
            <SwiperSlide key={index}>
              <Student 
                image={student.image} 
                name={student.name} 
                company={student.company} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Students;
