import React from 'react'
import { auth } from '../Components/firebase/firebase'
import useAuth from "../custom-hooks/useAuth"
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {currenUser}=useAuth();
  return currenUser?children :<Navigate to ="login"/>
}

export default ProtectedRoute