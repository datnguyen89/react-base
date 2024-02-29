import React from 'react'
import { JourneyImgWrapper, StartJourneyDesc, StartJourneyWrapper } from './StartJourneyStyled'
import { Container, PageTitle } from '../CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import IMAGES from '../../images'

const StartJourney = () => {
  return (
    <StartJourneyWrapper>
      <Container>
        <Row
          gutter={[16, 16]}
          justify={{
            xs: 'center',
            sm: 'center',
            md: 'space-between',
            lg: 'space-between',
            xl: 'space-between',
            xxl: 'space-between',
          }}
          align={'stretch'}
        >
          <Col xs={24} sm={24} md={12} lg={12} xl={14} xxl={14}>
            <PageTitle>Bắt đầu hành trình trải nghiệm của doanh nghiệp tại VPBank</PageTitle>
            <StartJourneyDesc>Mở tài khoản online dễ dàng | Chọn số phú quý | Trọn gói miễn phí</StartJourneyDesc>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} xxl={10}>
            <JourneyImgWrapper>
              <img src={IMAGES.JOURNEY} alt={'journey'} />
            </JourneyImgWrapper>
          </Col>
        </Row>

      </Container>
    </StartJourneyWrapper>
  )
}

export default StartJourney