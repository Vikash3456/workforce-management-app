import React from 'react'

const Complete_Task = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] p-5 bg-blue-400 rounded-xl '>
    <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl fontsemibold '>
      {data.taskTitle}
    </h2>
    <p className='text-sm mt-2'>
      {data.taskDescription}
    </p>
    <div className='mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Completed</button>
    </div>
  </div>
  )
}

export default Complete_Task