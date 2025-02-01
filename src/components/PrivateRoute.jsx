import React, { useContext } from 'react'
import { Context } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {login}= useContext(Context)
  return login?children:<Navigate to='/login'/>
}

export default PrivateRoute
