import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  BottomHeader, BottomHeaderContent, BottomHeaderText,
  DividerTopHeader,
  LandingHeaderWrapper,
  MainLogo,
  TopHeader,
  TopHeaderContent, TopHeaderText,
} from './LandingHeaderStyled'
import { Container } from '../CommonStyled/CommonStyled'
import IMAGES from '../../images'
import 'moment/locale/vi'
import moment from 'moment/moment'
import { useRecoilValue } from 'recoil'
import { breakPointState, currentPageState } from '../../recoil/commonState'
import { BREAKPOINT, PAGES } from '../../constant'
import { useNavigate } from 'react-router-dom'


const LandingHeader = props => {
  const breakPoint = useRecoilValue(breakPointState)
  const currentPage = useRecoilValue(currentPageState)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('currentPage', currentPage)
  }, [currentPage])
  return (
    <LandingHeaderWrapper>
      <TopHeader>
        <Container>
          <TopHeaderContent>
            <MainLogo src={IMAGES.GREEN_LOGO} alt={'logo'} />
            {
              (breakPoint !== BREAKPOINT.XS && breakPoint !== BREAKPOINT.SM) &&
              <DividerTopHeader />
            }
            <TopHeaderText>{moment().format('dddd, DD/MM/YYYY')}</TopHeaderText>
            {
              (breakPoint !== BREAKPOINT.XS && breakPoint !== BREAKPOINT.SM) &&
              <DividerTopHeader />
            }
            <TopHeaderText>TÀI KHOẢN SỐ ĐẸP CHO DOANH NGHIỆP</TopHeaderText>
          </TopHeaderContent>
        </Container>
      </TopHeader>
      <BottomHeader>
        <Container>
          <BottomHeaderContent>
            <BottomHeaderText
              active={currentPage === PAGES.HOME.PATH}
              onClick={() => navigate(PAGES.HOME.PATH)}
            >
              Giới thiệu
            </BottomHeaderText>
            <BottomHeaderText
              active={currentPage === PAGES.LOOKUP_ACCOUNT.PATH}
              onClick={() => navigate(PAGES.LOOKUP_ACCOUNT.PATH)}
            >
              Truy vấn tài khoản
            </BottomHeaderText>
            <BottomHeaderText>
              Liên hệ
            </BottomHeaderText>
          </BottomHeaderContent>
        </Container>
      </BottomHeader>
    </LandingHeaderWrapper>
  )
}

LandingHeader.propTypes = {}

export default LandingHeader