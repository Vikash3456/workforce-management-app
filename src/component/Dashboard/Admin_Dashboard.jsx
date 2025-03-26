import React from 'react'
import Header from '../Other/Header'
import Create_task from '../Other/Create_task'
import All_Task from '../Other/All_Task'
const Admin_Dashboard = (props) => {
  // console.log(props.data)
  return (
    <div className='h-screen w-full p-10 '>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Create_task/>
        <All_Task/>
    </div>
  )
}

export default Admin_Dashboard