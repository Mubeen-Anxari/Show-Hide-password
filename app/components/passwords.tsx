"use client"
import React, { useState } from 'react'

export default function Passwords() {
    const [password,setPassword]= useState('')
    const [isPassword, setIsPassword] =useState(false)

  return (
    <div className=' flex flex-col justify-center gap-4 items-center'>

    <h1 className=' font-bold text-2xl text-white'>Enter your password and Show / Hide your password</h1>
        <div className=' bg-blue-900 p-4 shadow-xl rounded-xl flex gap-2'>
            <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enetr Your Password' type={isPassword ? "text" :"password"} value={password} className=' w-full p-2 rounded-xl border border-green-600' />
            <button onClick={()=>setIsPassword(prevState=>!prevState)} className='bg-purple-900 text-white rounded-xl p-1'> 
                {isPassword ? "Hide Password": "Show Password"}
            </button>

        </div>
    </div>
  )
}
