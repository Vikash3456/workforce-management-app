import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import Emp_Dashboard from './component/Dashboard/Emp_Dashboard'
import Admin_Dashboard from './component/Dashboard/Admin_Dashboard'
import { getLocalStorage, setLocalStorage } from './utils/Local_storage'
import { Authcontex } from './context/Auth_Provider'

const App = () => {
const [User, setUser] = useState(null)
const [loggedInUser, setloggedInUser] = useState(null)
const [Userdata,setUserdata] =useContext(Authcontex)


useEffect(()=>{ 
  const loggedInUser=localStorage.getItem('loggedInUser')
   if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUser(userData.data)

   }
},[])

const handleLogin = (email, password) => {
  if (email === 'admin@me.com' && password === '123') {
      setUser ('Admin');
      localStorage.setItem('loggedInUser ', JSON.stringify({ role: 'Admin' })); // Removed extra space
  } else if (Userdata) {
      const employee = Userdata.find((e) => email === e.email && password === e.password);
      if (employee) {
          setUser ('employees');
          setloggedInUser (employee);
          localStorage.setItem('loggedInUser ', JSON.stringify({ role: 'employees', data: employee })); // Removed extra space
      }
  } else {
      alert("Invalid email or password");
  }
};

  return (
    <>

    {!User?<Login handleLogin={handleLogin}/>:''}
    {User=='Admin' ? <Admin_Dashboard changeUser={setUser} />:(User=='employees'?<Emp_Dashboard changeUser={setUser} data={loggedInUser}/>:null)}
    {/* <Emp_Dashboard/> */}
    {/* <Admin_Dashboard/> */}
    </>
  )
}

export default App