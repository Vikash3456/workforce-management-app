import React, { useContext, useState } from 'react'
import { Authcontex } from '../../context/Auth_Provider'
  
const Create_task = () => {

   const[Userdata,setUserdata]=useContext(Authcontex)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('') 
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')

  const [Newtask, setNewTask] = useState([])
  const submitHandler =(e) =>{
    e.preventDefault()
    // console.log(taskTitle,taskDate,taskDescription,assignTo,category)
    setNewTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false}) //create array of object 
     const data =Userdata
    console.log(data)
   data.forEach(function(elem){
    if(assignTo ==elem.firstName){
      elem.tasks.push(Newtask)
      elem.taskNo.newTask=elem.taskNo.newTask+1
    }
   })
   setUserdata(data)
   console.log(data)

//  setTaskTitle('')
//  setTaskDate('') 
//  setassignTo('')
//  setcategory('')
//  settaskDescription('')
 
  
   
  }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={(e)=>{
      submitHandler(e);
    }} className=' flex flex-wrap w-full item-start justify-between '>
        <div className='w-1/2'>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Tittle</h3>
        <input 
        value={taskTitle}
        onChange={(e)=>{
          setTaskTitle(e.target.value);
        }}
        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make UI Desing' />
        </div>

        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input  
        value={taskDate}
        onChange={(e)=>{
          setTaskDate(e.target.value)
        }}
        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'type="date" />
        </div>
        
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to </h3>
        <input 
        value={assignTo}
        onChange={(e)=>{
          setassignTo(e.target.value);
        }}
        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name ' />
        </div>
        
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input
        value={category}
        onChange={(e)=>{
        setcategory(e.target.value)
        }}
        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'type="text" placeholder='design,dev,etc' />
         </div>


        </div>
         
         <div className='w-2/5 flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea 
                value={taskDescription}
                onChange={(e)=>{
                  settaskDescription(e.target.value);
                }}
        className=' w-full h-44 text-sm py-2 px-4  rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
         </div>



                         
    </form>
</div>
  )
}

export default Create_task