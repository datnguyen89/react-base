import React from 'react'
import { BannerDesc, BannerTitle, MainBannerContent, MainBannerWrapper } from './MainBannerStyled'
import { Container } from '../CommonStyled/CommonStyled'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useRecoilValue } from 'recoil'
import { breakPointState } from '../../recoil/commonState'
import { BREAKPOINT, PAGES } from '../../constant'
import { useNavigate } from 'react-router-dom'

const MainBanner = () => {
  const breakPoint = useRecoilValue(breakPointState)
  const navigate = useNavigate()
  return (
    <MainBannerWrapper>
      <Container height={'100%'}>
        <MainBannerContent>
          <BannerTitle>
            WebTeck - IT Solution & Technology
          </BannerTitle>
          <BannerDesc>Providing Technology For Smart IT Solution</BannerDesc>

        </MainBannerContent>
      </Container>
    </MainBannerWrapper>
  )
}

export default MainBanner
