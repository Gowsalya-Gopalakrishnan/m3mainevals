import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()
const ContextProvider = ({children}) => {
    const[login,setLogin]=useState(false)
    const navigate = useNavigate("")
    const handleLogin=()=>{
        setLogin(true)
        navigate("/movies")
    }
    const handleLogout=()=>{
        setLogin(false)
        navigate("/login")
    }
  return (
    <AuthContext.Provider value={{login,handleLogin,handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default ContextProvider
