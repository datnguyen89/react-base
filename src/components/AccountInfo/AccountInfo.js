import React from 'react'
import PropTypes from 'prop-types'
import {
  AccountInfoLabel,
  AccountInfoValue,
  AccountInfoWrapper,
  FormLabel,
  FormLabelWrapper,
} from '../CommonStyled/CommonStyled'
import { Col, Row } from 'antd'

const AccountInfo = props => {
  const {accountNumber, fee} = props
  return (
    <>
      <FormLabelWrapper>
        <FormLabel>
          Quý khách đang lựa chọn:
        </FormLabel>
      </FormLabelWrapper>
      <AccountInfoWrapper>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <AccountInfoLabel>Số tài khoản: <AccountInfoValue>{accountNumber}</AccountInfoValue></AccountInfoLabel>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <AccountInfoLabel>Phí đăng ký: <AccountInfoValue>{fee}</AccountInfoValue></AccountInfoLabel>
          </Col>
        </Row>
      </AccountInfoWrapper>
    </>
  )
}

AccountInfo.propTypes = {
  accountNumber: PropTypes.string.isRequired,
  fee: PropTypes.string.isRequired
}

export default AccountInfo