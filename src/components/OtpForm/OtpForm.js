import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import PropTypes from 'prop-types'
import {
  ExpiredLabel,
  OtpDescription, OtpFooter,
  OtpFormWrapper,
  OtpTitle,
  ResendOtp,
  TimeLeft,
  WaitingResendOtp,
} from './OtpFormStyled'
import { Button, Col, Form, notification, Row } from 'antd'
import { ColorText } from '../CommonStyled/CommonStyled'
import { BREAKPOINT, ERROR_COLOR, ERROR_TITLE, RESPONSE_CODE, THEME } from '../../constant'
import { useRecoilValue } from 'recoil'
import { breakPointState } from '../../recoil/commonState'

const _ = require('lodash')

const OtpForm = props => {
  // region props, hook, state =================
  const {
    visible,
    expiredCountTime,
    resendCountTime,
    onCancel,
    hiddenResend,
    callbackOtp,
    description,
    otpLength,
  } = props

  const breakPoint = useRecoilValue(breakPointState)

  const [timeLeft, setTimeLeft] = useState(expiredCountTime || 180)
  const [timeResend, setTimeResend] = useState(resendCountTime || 30)
  const [otpDescription, setOtpDescription] = useState(description || '')
  const [otp, setOtp] = useState('')
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================
  const containerStyle = {
    width: '100%',
    justifyContent: 'center',
    margin: '16px 0',
  }
  const inputStyle = {
    width: breakPoint === BREAKPOINT.XS ? '30px' : breakPoint === BREAKPOINT.SM ? '32px' : '45px',
    height: breakPoint === BREAKPOINT.XS ? '30px' : breakPoint === BREAKPOINT.SM ? '32px' : '45px',
    margin: '0 8px',
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius: '8px',
  }
  const focusStyle = {
    border: `1px solid ${THEME.PRIMARY_COLOR}`,
  }
  // endregion
  // region function handle logic ==============
  const handleOk = () => {
    let checkOtpLength = otpLength || 6
    if (!otp) {
      notification.error({
        message: <ColorText fontSize={'20px'} color={ERROR_COLOR}>{ERROR_TITLE}</ColorText>,
        description: 'Vui lòng nhập mã OTP',
      })
      return
    }
    if (otp.length < checkOtpLength) {
      notification.error({
        message: <ColorText fontSize={'20px'} color={ERROR_COLOR}>{ERROR_TITLE}</ColorText>,
        description: `Vui lòng nhập đủ ${checkOtpLength} ký tự OTP`,
      })
      return
    }
    callbackOtp(otp)
  }
  const handleInputOtp = (value) => {
    const reg = /^-?\d+\.?\d*$/
    if (reg.test(value)) {
      setOtp(value)
    } else {
      setOtp('')
    }
  }
  const handleCancel = () => {
    onCancel()
  }
  const handleClickResend = () => {
    // TODO: call api gửi lại otp mới sau đó set lại state ở dưới
    setTimeResend(resendCountTime || 30)
    setTimeLeft(expiredCountTime || 180)

    // setOtpDescription(res?.description)
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================
  useEffect(() => {
    if (!timeLeft) return
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeLeft])
  useEffect(() => {
    if (!timeResend) return
    const intervalId = setInterval(() => {
      setTimeResend(timeResend - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeResend])
  useEffect(() => {
    if (!visible) return
    setTimeLeft(expiredCountTime || 180)
    setTimeResend(resendCountTime || 30)
    setOtp('')
  }, [visible, expiredCountTime, resendCountTime])
  useEffect(() => {
    if (!description) return
    setOtpDescription(description)
  }, [description])
  // endregion

  return (
    <OtpFormWrapper
      title='Nhập mã xác thực'
      maskClosable={false}
      visible={visible}
      footer={null}
      onCancel={handleCancel}>
      <Form onFinish={handleOk}>
        <Form.Item noStyle>
          <Row
            gutter={[
              { xs: 8, sm: 8, md: 16, lg: 16, xl: 16, xxl: 16 },
              { xs: 8, sm: 8, md: 16, lg: 16, xl: 16, xxl: 16 },
            ]}
            justify={'center'}
          >
            <Col span={24}>
              <OtpTitle>
                NHẬP THÔNG TIN OTP
              </OtpTitle>
              <OtpDescription>
                {otpDescription}
                <br />
                Vui lòng nhập mã OTP
              </OtpDescription>
            </Col>
            <Col span={24}>
              <OtpInput
                shouldAutoFocus={true}
                isInputNum={true}
                value={otp}
                numInputs={otpLength || 6}
                onChange={handleInputOtp}
                containerStyle={containerStyle}
                inputStyle={inputStyle}
                focusStyle={focusStyle}
                separator={''} />
              <ExpiredLabel>
                Mã OTP sẽ hết hạn sau: <TimeLeft>{timeLeft}</TimeLeft>/{expiredCountTime || 180}s
              </ExpiredLabel>
            </Col>
            <Col span={24}>
              <OtpFooter>
                <Button
                  disabled={timeResend > 0}
                  style={{ minWidth: 120 }}
                  type={'default'}
                  block={breakPoint === BREAKPOINT.XS}
                  onClick={handleClickResend}>
                  {timeResend === 0 ? 'Gửi lại OTP' : `Gửi lại OTP sau ${timeResend}s`}
                </Button>
                <Button
                  disabled={timeLeft === 0}
                  style={{ minWidth: 120 }}
                  type={'primary'}
                  block={breakPoint === BREAKPOINT.XS}
                  htmlType={'submit'}>
                  Tiếp tục
                </Button>
              </OtpFooter>
            </Col>
          </Row>

        </Form.Item>
      </Form>

    </OtpFormWrapper>
  )
}

OtpForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  callbackOtp: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  description: PropTypes.node,
  otpLength: PropTypes.number,
  isAuthentication: PropTypes.bool,
  hiddenResend: PropTypes.bool,
  expiredCountTime: PropTypes.number,
  resendCountTime: PropTypes.number,
}

export default OtpForm
