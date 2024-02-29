import React from 'react'
import { Step2RegisterInfoWrapper } from './Step2RegisterInfoStyled'
import {
  AccountInfoLabel, AccountInfoValue,
  AccountInfoWrapper,
  BackArrowWrapper,
  Container,
  FormBigTitle,
  FormLabel, FormLabelWrapper, FormRequired,
  FormWrapper,
  TopLeft,
} from '../CommonStyled/CommonStyled'
import IMAGES from '../../images'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import PropTypes from 'prop-types'
import { BREAKPOINT } from '../../constant'
import { useRecoilValue } from 'recoil'
import { breakPointState } from '../../recoil/commonState'
import AccountInfo from '../AccountInfo'

const Step2RegisterInfo = props => {
  const { onClickBack, nextStep } = props
  const breakPoint = useRecoilValue(breakPointState)
  const [form] = Form.useForm()
  const handleSubmit = (values) => {
    console.log(values)
    //TODO: Chỗ này tùy get info về xem đã hold chưa
    // Đã hold: sang step 3A
    // Chưa hold: sang step 3B
    const response = { id: 1, hold: true, ...values }
    nextStep && nextStep(response)
  }
  const handleClickBack = () => {
    onClickBack()
  }

  return (
    <Step2RegisterInfoWrapper>
      <Container>
        <FormWrapper>
          <BackArrowWrapper>
            <img src={IMAGES.BACK_ARROW} alt={'back'} onClick={handleClickBack} />
          </BackArrowWrapper>
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
                    { xs: 0, sm: 0, md: 16, lg: 16, xl: 16, xxl: 16 },
                    { xs: 0, sm: 0, md: 16, lg: 16, xl: 16, xxl: 16 },
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
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ textAlign: 'right' }}>
                    <Button style={{ minWidth: 120 }} type={'primary'} htmlType={'submit'}>Tra cứu</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

        </FormWrapper>
      </Container>
    </Step2RegisterInfoWrapper>
  )
}

Step2RegisterInfo.propTypes = {
  onClickBack: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
}

export default Step2RegisterInfo