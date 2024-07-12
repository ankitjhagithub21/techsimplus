import React from 'react'

const Student = (props) => {
    const {image,name,company} = props
  return (
  
      <div className='student p-3 flex flex-col gap-1 items-center justify-center'>
            <img src={image} alt="student image" className='rounded-full w-20'/>
            <h2 className='text-lg'>{name}</h2>
            <img src={company} alt="company image"className=' w-20' />
      </div>
   
  )
}

export default Student
