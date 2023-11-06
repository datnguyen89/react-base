import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { PublicLayoutWrapper } from './PublicLayoutStyled'
import { useRecoilState } from 'recoil'
import { currentPageState } from '../../recoil/commonState'

const PublicLayout = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)

  useEffect(() => {
    const segment = location.pathname.split('/').filter(item => item !== '')
    if (segment.length === 0) {
      setCurrentPage('/')
    } else {
      setCurrentPage(`/${segment[0]}`)
    }
  }, [location.pathname])


  return (
    <PublicLayoutWrapper>
      <Outlet />
    </PublicLayoutWrapper>
  )
}

export default PublicLayout
