import React from 'react'
import {
  CircleNumber,
  CircleNumberDesc,
  IntroPromotionDesc,
  IntroPromotionWrapper,
  PromotionItem,
} from './IntroPromotionStyled'
import { Container, PageTitle } from '../CommonStyled/CommonStyled'
import IMAGES from '../../images'
import { Button, Col, Row } from 'antd'
import { PROMOTION_LIST } from '../../data'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../constant'

const IntroPromotion = () => {
  const navigate = useNavigate()

  return (
    <IntroPromotionWrapper>
      <Container>
        <PageTitle>Ưu đãi cực khủng cho KH chọn tài khoản số đẹp tại VPbank.</PageTitle>
        <IntroPromotionDesc>
          <img src={IMAGES.ALERT_TRIANGLE} alt={'icon-alert'} />
          Ưu đãi kèm thêm điều kiện theo từng thời kỳ.
        </IntroPromotionDesc>
        <Row
          justify={{
            xs: 'center',
            sm: 'center',
            md: 'space-between',
            lg: 'space-between',
            xl: 'space-between',
            xxl: 'space-between',
          }}
          align={'stretch'}
          style={{
            border: '1px solid #EAEAEA',
            background: '#fff',
            borderRadius: 8,
          }}
        >
          {
            PROMOTION_LIST.map((item, index) =>
              <Col xs={20} sm={20} md={12} lg={8} xl={8} xxl={8} key={index}>
                <PromotionItem>
                  <CircleNumber>{item.index}</CircleNumber>
                  <CircleNumberDesc>{item.desc}</CircleNumberDesc>
                </PromotionItem>
              </Col>,
            )
          }
        </Row>
        <Button
          style={{ marginTop: 16 }}
          type={'primary'}
          onClick={() => navigate(PAGES.LOOKUP_ACCOUNT.PATH)}
        >
          Tra cứu ngay <ArrowRightOutlined />
        </Button>
      </Container>
    </IntroPromotionWrapper>
  )
}

export default IntroPromotion