import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../context/AuthContext'
import '../styles/Login.css'


const Login = () => {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[token,setToken]=useState(null)
    const[error,setError] = useState(false)
    const{login,handleLogin,handleLogout} = useContext(Context)

    const handleSubmit= async (e)=>{
        e.preventDefault();
        // console.log(e)
        try{
            const response = await axios({
                method:"POST",
                url:"https://graceful-abrasive-cotija.glitch.me/login",
                data:{
                    username,password
                }
            })
            if(response.data.token){
                console.log(response.data.token)
                const {token} =response.data
                setToken(token)
                handleLogin()
            }
        }catch(err){
            setError(err.response.data.message)
            alert(err.response.data.message)
            handleLogout()
        }
    }
  return (
    <div>
        <form className='loginform' onSubmit={handleSubmit}>
            <h2> Please Login...</h2>
            <input type='text' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type='submit' value='Login'/>
        </form>
    </div>
  )
}

export default Login
