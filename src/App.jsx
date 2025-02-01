import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/quiz' element={<Quiz/>}></Route>
            <Route path='/result/:userId' element={<Result/>}></Route>
            <Route path='/login' element={
              // <PrivateRoute>
              <Login/>
            //  </PrivateRoute>
             }></Route>
          </Routes>
       </div>
    </>
  )
}

export default App
