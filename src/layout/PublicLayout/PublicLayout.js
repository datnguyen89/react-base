import React from 'react'
import { Outlet } from 'react-router-dom'
import { PublicLayoutWrapper } from './PublicLayoutStyled'

const PublicLayout = () => {
  return (
    <PublicLayoutWrapper>
      <Outlet />
    </PublicLayoutWrapper>
  )
}

export default PublicLayout
