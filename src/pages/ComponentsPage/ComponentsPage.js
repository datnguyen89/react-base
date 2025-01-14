import React from 'react'
import { ComponentsPageWrapper } from './ComponentsPageStyled'
import { Button, DatePicker, Form, Input, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import config from '../../config'
import { useResetRecoilState } from 'recoil'
import { accessTokenState } from '../../recoil/authenticationState'
import moment from 'moment'
import InputMu from '../../components/InputMu/InputMu'

const { Text } = Typography

const ComponentsPage = props => {
  // region props, hook, state =================
  const { t } = useTranslation()
  const resetToken = useResetRecoilState(accessTokenState)
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============
  const handleClearToken = () => {
    resetToken()
  }

  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion

  return (
    <ComponentsPageWrapper>
      <Typography.Text>Input MU</Typography.Text>
      <br />
      <br />
      <br />
      <Form>
        <Form.Item>
          <InputMu label="Your Label" />
        </Form.Item>
        <Form.Item>
          <Input label="Your Label" placeholder="Enter your text" />
        </Form.Item>
      </Form>
    </ComponentsPageWrapper>
  )
}

ComponentsPage.propTypes = {}

export default ComponentsPage
