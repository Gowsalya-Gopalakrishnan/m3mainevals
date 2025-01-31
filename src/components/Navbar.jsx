import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Navbar.css'
import { AuthContext } from './ContextProvider'
const Navbar = () => {
  const{login,handleLogin,handleLogout}=useContext(AuthContext)
  return (
    <>
    <div className='navbar'>
    <NavLink to='/home' className='navlinks'>Home</NavLink>
    <NavLink to='/movies'className='navlinks'>Movies</NavLink>
    {/* <NavLink to='/login'className='navlinks'>Login</NavLink> */}
    <div className='navlinks'>
      {
      login?<button onClick={handleLogout}>Log out</button>:<button onClick={handleLogin}>Login</button>
    }
    </div>
    
    </div>
    
    </>
    
  )
}

export default Navbar
