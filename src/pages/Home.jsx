import React, { useContext } from 'react'
import '../styles/Home.css'
import { AuthContext } from '../components/ContextProvider'

const Home = () => {
  const{login,handleLogout,handleLogin} = useContext(AuthContext)
  const hadleGetStarted=()=>{
    if(!login){
      handleLogout()
    }
    else{
      handleLogin()
    }
  }
  return (
    <div className='homepage'>
      <h1>Welcome to Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique 
        asperiores debitis est labore iste, dolor dolorum cumque fugit autem 
        
      </p>
      <button onClick={hadleGetStarted}>Get Started</button>
    </div>
  )
}

export default Home
