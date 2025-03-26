import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submitHandler=(e) => {
        e.preventDefault()
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }
  return (
    <div className='min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 relative overflow-hidden'>
      {/* Decorative Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[20%] left-[15%] w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] right-[25%] w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className='border-2 rounded-xl border-emerald-500/30 p-12 md:p-20 backdrop-blur-md bg-white/10 shadow-2xl 
        hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 relative z-10' >
       <form 
       onSubmit={(e)=>{submitHandler(e)
         e.preventDefault()
       }} 
       className='flex flex-col items-center justify-center space-y-6 min-w-[320px]'>
        <h2 className="text-3xl font-bold text-white mb-6 animate-fadeIn">Welcome Back</h2>
        <div className="relative w-full group">
          <input
            value={email} 
            onChange={(e)=>{
                setemail(e.target.value)
            }}
            required 
            className='w-full outline-none bg-white/10 border-2 border-emerald-500/30 rounded-full py-3 px-5 text-xl 
            placeholder:text-gray-300 text-white
            transition-all duration-300 focus:border-emerald-400 hover:border-emerald-500
            transform hover:-translate-y-1' 
            type="email" 
            placeholder='Enter Your Email' 
          />
        </div>
        <div className="relative w-full group">
          <input 
            value={password} 
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
            required 
            className='w-full outline-none bg-white/10 border-2 border-emerald-500/30 rounded-full py-3 px-5 text-xl 
            placeholder:text-gray-300 text-white
            transition-all duration-300 focus:border-emerald-400 hover:border-emerald-500
            transform hover:-translate-y-1' 
            type="password" 
            placeholder='Enter Password' 
          />
        </div>
        <button 
          className='text-white mt-4 border-none outline-none bg-emerald-600 rounded-full py-3 px-8 text-xl 
          transition-all duration-300 hover:bg-emerald-500 active:bg-emerald-700 
          transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/50
          w-full md:w-auto
          bg-gradient-to-r from-emerald-600 to-emerald-500'>
          Log in
        </button>

        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-emerald-500/20 rounded-full"></div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 border-2 border-emerald-500/20 rounded-full"></div>
      </form>
      </div>
    </div>
  )
}

export default Login