import React from 'react'
import PropTypes from 'prop-types'
import { CopyRightText, FooterLink, FooterLinkWrapper, FooterLogo, LandingFooterWrapper } from './LandingFooterStyled'
import { Col, Divider, Row } from 'antd'
import IMAGES from '../../images'
import moment from 'moment'
import { Container } from '../CommonStyled/CommonStyled'
import { useRecoilValue } from 'recoil'
import { breakPointState } from '../../recoil/commonState'
import { BREAKPOINT } from '../../constant'

const LandingFooter = props => {
  const breakPoint = useRecoilValue(breakPointState)
  return (
    <LandingFooterWrapper>
      <Container>
        <Row
          gutter={[
            { xs: 0, sm: 0, md: 16, lg: 16, xl: 16, xxl: 16 },
            { xs: 0, sm: 0, md: 16, lg: 16, xl: 16, xxl: 16 },
          ]}
        >
          <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
            <FooterLogo src={IMAGES.WHITE_LOGO} alt={'footer-logo'} />
            <CopyRightText>@ {moment().year()}. All rights reserved by VPBank SME</CopyRightText>
            {
              (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM || breakPoint === BREAKPOINT.MD) &&
              <Divider style={{ margin: '16px 0', background: '#e1e1e1' }} />
            }
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
            <FooterLinkWrapper>
              <img src={IMAGES.LOCATION} alt={'location'} />
              <FooterLink>89 Lang Ha str., Dong Da dist., Ha Noi</FooterLink>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <img src={IMAGES.PHONE} alt={'phone'} />
              <FooterLink href={'tel:1900234568'}>1900234568</FooterLink>
            </FooterLinkWrapper>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
            <FooterLinkWrapper>
              <img src={IMAGES.MAIL} alt={'location'} />
              <FooterLink href={'mailto:chamsocdoanhnghiep@vpbank.com.vn'}>chamsocdoanhnghiep@vpbank.com.vn</FooterLink>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <img src={IMAGES.FACEBOOK} alt={'phone'} />
              <FooterLink href={'https://facebook.com/vpbank.sme'}
                          target={'_blank'}>facebook.com/vpbank.sme</FooterLink>
            </FooterLinkWrapper>
          </Col>
        </Row>
      </Container>

    </LandingFooterWrapper>
  )
}

LandingFooter.propTypes = {}

export default LandingFooter
