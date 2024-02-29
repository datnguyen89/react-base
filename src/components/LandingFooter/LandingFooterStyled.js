import styled from 'styled-components'
import IMAGES from '../../images'

export const LandingFooterWrapper = styled.div`
  background-image: url(${IMAGES.FOOTER_LEFT}), url(${IMAGES.FOOTER_RIGHT}), linear-gradient(270deg, #00B74F -22.41%, #1D4289 108.33%);
  background-position: left bottom, right top, center;
  background-repeat: no-repeat, no-repeat, no-repeat;
  padding: 48px 0;
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
  @media only screen and (max-width: 576px) {
    padding: 24px;
  }
  @media only screen and (max-width: 375px) {
    padding: 16px;
  }
`
export const FooterLogo = styled.img`
  margin-bottom: 16px;
  @media only screen and (max-width: 768px) {
    height: 24px;
  }
  @media only screen and (max-width: 576px) {
    margin-bottom: 24px;
  }
`
export const CopyRightText = styled.div`
  color: #EAEAEA;
  font-weight: 500;
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 576px) {
    margin-bottom: 16px;
  }
`
export const FooterLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
    @media only screen and (max-width: 768px) {
      margin-bottom: 16px;
    }
  }
  
`
export const FooterLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin-left: 8px;
`
