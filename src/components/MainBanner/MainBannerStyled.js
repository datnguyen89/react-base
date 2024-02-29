import styled from 'styled-components'
import IMAGES from '../../images'

export const MainBannerWrapper = styled.div`
  background-image: linear-gradient(270deg, rgba(0, 183, 79, 0.4) -22.41%, rgba(29, 66, 137, 0.4) 108.33%), url(${IMAGES.BANNER_BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 580px;  
  padding: 16px;
`
export const MainBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 100%;
`
export const BannerTitle = styled.div`
  font-size: 36px;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 24px;
  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`
export const BannerDesc = styled.div`
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 24px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`