import styled from 'styled-components'

export const StartJourneyWrapper =styled.div`
  padding: 0 32px;
  margin-bottom: 36px;
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`
export const StartJourneyDesc = styled.div`
  color: #2E2E2E;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const JourneyImgWrapper = styled.div`
  position: relative;
  text-align: right;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  img {
    width: auto;
    height: 270px;
    object-fit: scale-down;

    @media only screen and (max-width: 1600px) {
    }
    @media only screen and (max-width: 1200px) {
      height: 230px;
    }
    @media only screen and (max-width: 992px) {
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 576px) {
    }
  }
`