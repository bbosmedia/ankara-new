import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectAccesToken } from './redux/ChangeRegister'



const PrivateRoute = () => {
    const accessToken = useSelector(selectAccesToken)
    return accessToken.length > 0 ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute
