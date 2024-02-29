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
            Chọn tài khoản số đẹp{breakPoint === BREAKPOINT.XS ? '\n' : ' - '}Đón tài lộc kinh doanh
          </BannerTitle>
          <BannerDesc>Quản lý tài chính an toàn, hiệu quả. Tận hường cực nhiều ưu đãi.</BannerDesc>
          <Button
            onClick={() => navigate(PAGES.LOOKUP_ACCOUNT.PATH)}
            style={{ color: '#00B74F' }}
          >
            Đăng ký tài khoản số đẹp <ArrowRightOutlined />
          </Button>
        </MainBannerContent>
      </Container>
    </MainBannerWrapper>
  )
}

export default MainBanner