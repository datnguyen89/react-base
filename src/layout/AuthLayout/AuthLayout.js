import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthLayoutWrapper } from './AuthLayoutStyled'

const AuthLayout = () => {
  return (
    <AuthLayoutWrapper>
      <Outlet />
    </AuthLayoutWrapper>
  )
}

export default AuthLayout
