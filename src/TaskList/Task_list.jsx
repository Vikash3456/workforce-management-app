import React from 'react'
import Accept_Task from './Accept_Task'
import New_Task from './New_Task'
import Complete_Task from './Complete_Task'
import Failed_Task from './Failed_Task'

const Task_list = ({data}) => {

  return (
    <div id='tasklist'className=' flex items-center justify-start gap-5 flex-nowrap h-[64%] overflow-x-auto   py-5 w-full   mt-10  w-screen '>
   {data.tasks.map((elem,idx)=>{
      if(elem.active){
        return <Accept_Task key={idx} data={elem}/>
      } 
      if(elem.newTask){
        return <New_Task key={idx} data={elem}/>
      }
      if(elem.completed){
        return <Complete_Task key={idx} data={elem}/>
      }

      if(elem.failed){
        return <Failed_Task key={idx} data={elem}/>
      }
   })}


    </div>
  )
}

export default Task_list