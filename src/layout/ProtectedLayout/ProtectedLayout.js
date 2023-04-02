import React from 'react'
import { Outlet } from 'react-router-dom'
import { ProtectedLayoutWrapper } from './ProtectedLayoutStyled'

const ProtectedLayout = () => {
  return (
    <ProtectedLayoutWrapper>
      <Outlet />
    </ProtectedLayoutWrapper>
  )
}

export default ProtectedLayout
