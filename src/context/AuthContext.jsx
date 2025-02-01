import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createContext } from 'react'

export const Context = createContext()
const AuthContext = ({children}) => {
    const[login,setLogin]=useState(false)
    const navigate = useNavigate()
    const handleLogin = ()=>{
        setLogin(true)
        navigate("/quiz")
    }
    const handleLogout=()=>{
        setLogin(false)
        navigate("/login")
    }
  return (
    <Context.Provider value={{login,handleLogin,handleLogout}}>
        {children}
    </Context.Provider>
  )
}

export default AuthContext
