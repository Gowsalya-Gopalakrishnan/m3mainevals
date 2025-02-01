import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-cont'>
    <Link to='/' className='navbar-links'>Home</Link>
    <Link to='/quiz'className='navbar-links'>Quiz</Link>
    <Link to='result'className='navbar-links'>Result</Link>
    </div>
    
  )
}

export default Navbar
