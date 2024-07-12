import React from 'react'
import Review from './Review'

const Reviews = () => {
    return (
        <section className='py-12'>
            <div className='container mx-auto '>
              <div className='px-5'>
              <h1 className='text-3xl font-bold text-center'>See what our Student's Say</h1>
              <p className='mb-10 text-center'>Discover what our students are saying about their transformative journey with us!</p>
              </div>
                <div className='flex flex-wrap'>
                 <Review/>
                 <Review/>
                 <Review/>
                </div>
            </div>
        </section>
    )
}

export default Reviews
