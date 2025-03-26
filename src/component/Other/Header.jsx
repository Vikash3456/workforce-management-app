import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/Local_storage'

const Header = (props) => {
  // const [Username, setUsername] = useState('')
  // if(!data){
  //   setUsername('admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  const logOutUser=({}) =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    
    // window.location.reload() 
  }
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Hello <br /><span text-5xl >{props.data ? props.data.firstName : 'Admin'}🤞</span></h1>
    <button onClick={logOutUser} className='bg-red-600 text-lg text-white text-xl px-5 py-2 rounded '>Log Out</button>
    </div>
  )
}

export default Header