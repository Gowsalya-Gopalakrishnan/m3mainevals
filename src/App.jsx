import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Footer from './components/Footer'
import AddNew from './pages/AddNew'
import NotFound from './pages/NotFound'
import ViewMore from './pages/ViewMore'
import EditMovie from './pages/EditMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/movies' element={
            <PrivateRoute>
              <Movies/>
              </PrivateRoute>}>
          </Route>
          <Route path='/addnew' element={
            <PrivateRoute>
              <AddNew/>
              </PrivateRoute>}>
          </Route>
          <Route path='/editmovie/:id' element={
            <PrivateRoute>
              <EditMovie/>
              </PrivateRoute>}>
          </Route>
          <Route path='/movies/:id' element={
            <PrivateRoute>
              <ViewMore/>
              </PrivateRoute>}>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          {/* <Route path='/movies/:id' element={<ViewMore/>}></Route> */}
          
          <Route path='*' element={<NotFound/>}></Route>
          
        </Routes>
        <Footer/>
       </div>
    </>
  )
}

export default App
