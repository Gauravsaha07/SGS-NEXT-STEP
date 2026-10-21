import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus'
import LoadingScreen from './LoadingScreen'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {

    const { checkingUser, isAuthenticated } = useAuthStatus()


    if (checkingUser) {
        return (
            <LoadingScreen />
        )
    }

    return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />

}

export default PrivateComponent
