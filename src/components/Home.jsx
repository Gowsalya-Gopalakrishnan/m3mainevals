import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='homepage'>
      <h2>Welcome to the Quiz App!</h2>
      <p>Test your knowledge and challenge yourself
        with out quiz. Please<Link to='/login'>Login</Link> to get started
      </p>
    </div>
  )
}

export default Home
