import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthLayoutWrapper } from './AuthLayoutStyled'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isDarkModeState } from '../../recoil/commonState'

const AuthLayout = () => {
  const isDarkMode = useRecoilValue(isDarkModeState)
  return (
    <AuthLayoutWrapper isDarkMode={isDarkMode}>
      <Outlet />
    </AuthLayoutWrapper>
  )
}

export default AuthLayout
