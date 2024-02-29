import React from 'react'
import { IntroServiceWrapper, IntroText } from './IntroServiceStyled'
import { Container, PageTitle, WhiteCard } from '../CommonStyled/CommonStyled'
import { Col, Row } from 'antd'
import IMAGES from '../../images'

const IntroService = () => {
  return (
    <IntroServiceWrapper>
      <Container>
        <PageTitle
        >
          Vì sao Doanh nghiệp nên chọn tài khoản số đẹp tại VPBank?
        </PageTitle>
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 16, lg: 16, xl: 16, xxl: 16 },
            { xs: 16, sm: 16, md: 16, lg: 16, xl: 16, xxl: 16 },
          ]}
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
          <Col xs={20} sm={16} md={8} lg={8} xl={7} xxl={6}>
            <WhiteCard>
              <img src={IMAGES.INTRO_1} alt={'intro-1'} width={80} height={80} />
              <IntroText>Dễ nhớ</IntroText>
            </WhiteCard>
          </Col>
          <Col xs={20} sm={16} md={8} lg={8} xl={7} xxl={6}>
            <WhiteCard>
              <img src={IMAGES.INTRO_2} alt={'intro-2'} width={80} height={80} />
              <IntroText>Tạo dấu ấn</IntroText>
            </WhiteCard>
          </Col>
          <Col xs={20} sm={16} md={8} lg={8} xl={7} xxl={6}>
            <WhiteCard>
              <img src={IMAGES.INTRO_3} alt={'intro-3'} width={80} height={80} />
              <IntroText>Tạo ấn tượng tốt trong Kinh doanh</IntroText>
            </WhiteCard>
          </Col>
        </Row>
      </Container>
    </IntroServiceWrapper>
  )
}

export default IntroService