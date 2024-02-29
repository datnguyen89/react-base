import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Step3AHoldWrapper } from './Step3AHoldStyled'
import {
  BackArrowWrapper, ConditionView,
  Container,
  FormBigTitle,
  FormLabel,
  FormRequired,
  FormWrapper, TextInform, TextPrimaryInform,
} from '../CommonStyled/CommonStyled'
import IMAGES from '../../images'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import AccountInfo from '../AccountInfo'
import { BREAKPOINT } from '../../constant'
import { useRecoilValue } from 'recoil'
import { breakPointState } from '../../recoil/commonState'
import OtpForm from '../OtpForm'
import ConditionRender from '../ConditionRender'

const Step3AHold = props => {
  const { onClickBack, nextStep, customerInfo } = props
  const breakPoint = useRecoilValue(breakPointState)
  const [form] = Form.useForm()

  const [progressStep, setProgressStep] = useState(1)

  const handleClickBack = () => {
    setProgressStep(1)
    onClickBack()
  }
  const handleSubmit = (values) => {
    console.log(values)
    setProgressStep(2)
  }

  useEffect(() => {
    if (!customerInfo) return
    form.setFieldsValue({
      documentType: customerInfo.documentType,
      documentNumber: customerInfo.documentNumber,
    })
  }, [customerInfo])

  return (
    <Step3AHoldWrapper>
      <Container>
        <FormWrapper>
          {/*<BackArrowWrapper>*/}
          {/*  <img src={IMAGES.BACK_ARROW} alt={'back'} onClick={handleClickBack} />*/}
          {/*</BackArrowWrapper>*/}
          <ConditionRender visible={progressStep === 1}>
            <Row justify={'center'}>
              <Col xs={24} sm={24} md={24} lg={22} xl={22} xxl={20}>
                <AccountInfo accountNumber={'66668888'} fee={'7,700,000 VNĐ'} />
                <FormBigTitle
                  margin={'48px 0 40px 0'}
                  textAlign={'center'}>
                  Thông tin Quý khách hàng
                </FormBigTitle>
                <Form
                  form={form}
                  layout={'vertical'}
                  onFinish={handleSubmit}
                >
                  <Row
                    gutter={[
                      { xs: 8, sm: 8, md: 16, lg: 16, xl: 16, xxl: 16 },
                      { xs: 8, sm: 8, md: 16, lg: 16, xl: 16, xxl: 16 },
                    ]}
                    justify={{
                      xs: 'center',
                      sm: 'center',
                      md: 'space-between',
                      lg: 'space-between',
                      xl: 'space-between',
                      xxl: 'space-between',
                    }}
                    align={'bottom'}
                  >
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                      <Form.Item

                        label={<>
                          <FormLabel>Loại giấy tờ</FormLabel>
                          <FormRequired> * </FormRequired>
                        </>}
                        name={'documentType'}
                      >
                        <Select
                          placeholder={'Chọn'}
                          style={{ height: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'auto' : 48 }}>
                          <Select.Option value={1}>1</Select.Option>
                          <Select.Option value={2}>2</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                      <Form.Item
                        label={<>
                          <FormLabel>Số giấy tờ</FormLabel>
                          <FormRequired> * </FormRequired>
                        </>}
                        name={'documentNumber'}
                      >
                        <Input
                          style={{ height: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'auto' : 48 }}
                          autoComplete={'off'} placeholder={'Empty'} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ textAlign: 'justify' }}>
                      <Form.Item>
                        <TextInform>
                          Quý khách đang giữ số tài
                          khoản <TextPrimaryInform>[{customerInfo?.documentNumber}]</TextPrimaryInform>.
                          Quý khách có muốn bỏ số tài khoản này để lưu giữ số tài khoản mới?
                        </TextInform>
                      </Form.Item>
                    </Col>
                    <Col
                      xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}
                      style={{ textAlign: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'center' : 'left' }}
                      order={(breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 2 : 1}
                    >
                      <Button
                        style={{
                          minWidth: 120,
                          background: '#EAEAEA',
                          border: '1px solid #EAEAEA',
                          color: '#818181',
                        }}
                        block={(breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM)}
                        type={'default'}
                        onClick={handleClickBack}
                      >
                        Không đồng ý
                      </Button>
                    </Col>
                    <Col
                      xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}
                      style={{ textAlign: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'center' : 'right' }}
                      order={(breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 1 : 2}
                    >
                      <Button
                        style={{ minWidth: 120 }}
                        block={(breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM)}
                        type={'primary'} htmlType={'submit'}
                      >
                        Đồng ý
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </ConditionRender>
          <ConditionRender visible={progressStep === 2}>
            <OtpForm
              description={`VPBank đã gửi mã OTP đến số điện thoại 0987655xxx`}
              expiredCountTime={180}
              resendCountTime={30}
              visible={true}
              callbackOtp={(e) => {
                console.log(e)
              }}
              onCancel={() => {
              }} />
          </ConditionRender>
        </FormWrapper>
      </Container>
    </Step3AHoldWrapper>
  )
}

Step3AHold.propTypes = {
  onClickBack: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
}

export default Step3AHold
