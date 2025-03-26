import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/Local_storage'
 
export const Authcontex=createContext()

const Auth_Provider = ({children}) => {
  // localStorage.clear()
  const [Userdata, setUserdata] = useState(null)

  
  useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()
    setUserdata(employees)
},[])



  return (
    <div>
        <Authcontex.Provider value={[Userdata,setUserdata]}>
        {children}
        </Authcontex.Provider>
        </div>
  )
}

export default Auth_Provider