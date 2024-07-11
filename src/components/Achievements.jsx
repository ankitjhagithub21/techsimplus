import React from 'react'
import achievements from '../data/achievements'

const Achievements = () => {
  return (
    <section>
        <div className='container flex flex-wrap mx-auto'>
            {
                achievements.map((achievement)=>{
                    return <div key={achievement.id} className='text-center lg:w-1/4 md:w-1/2 w-full p-5'>
                        <h2 className='text-3xl font-bold'>{achievement.title}</h2>
                        <p className='text-gray-600'>{achievement.desc}</p>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Achievements
