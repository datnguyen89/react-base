import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { PublicLayoutWrapper } from './PublicLayoutStyled'
import LandingHeader from '../../components/LandingHeader'
import LandingFooter from '../../components/LandingFooter'
import { useRecoilState, useRecoilValue } from 'recoil'
import { breakPointState, currentPageState } from '../../recoil/commonState'
import { PAGES } from '../../constant'
import LandingBody from '../../components/LandingBody'

const PublicLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)
  const breakPoint = useRecoilValue(breakPointState)

  useEffect(() => {
    const segment = location.pathname.split(PAGES.HOME.PATH).filter(item => item !== '')
    if (segment.length === 0) {
      setCurrentPage(PAGES.HOME.PATH)
    } else {
      setCurrentPage(`/${segment[0]}`)
    }
  }, [location.pathname])
  return (
    <PublicLayoutWrapper>
      <LandingHeader />
      <LandingBody>
        <Outlet />
      </LandingBody>
      <LandingFooter />
    </PublicLayoutWrapper>
  )
}

export default PublicLayout
