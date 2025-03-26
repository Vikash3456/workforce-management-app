import React from 'react'
import Header from '../Other/Header'
import Task_no from '../Other/Task_no'
import Task_list from '../../TaskList/Task_list'
const Emp_Dashboard = (props) => {
  // console.log({data})
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen  '>

        <Header changeUser={props.changeUser} data={props.data}/>
        <Task_no data={props.data}/>
        <Task_list data={props.data}/>
    </div>
  )
}

export default Emp_Dashboard