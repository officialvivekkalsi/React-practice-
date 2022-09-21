import React from 'react'
import { useNavigate } from 'react-router'

function Login() {
    const Navigate=useNavigate()
    const Logins=()=>{
        const login=localStorage.setItem('login',true)
        if (!login){
            console.log('tur')
            Navigate('/home')
        } else{
        }
    }
  return (
    <div>
        <input type="text" />
        <input type="text" />
        <button onClick={Logins}>Login</button>        
    </div>
  )
}

export default Login