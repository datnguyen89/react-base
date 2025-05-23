import React from 'react'
import { I18nPageWrapper } from './I18nPageStyled'
import { Button, DatePicker, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import config from '../../config'
import { useResetRecoilState } from 'recoil'
import { accessTokenState } from '../../recoil/authenticationState'
import moment from 'moment'

const { Text } = Typography

const I18nPage = props => {
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
    <I18nPageWrapper>
      <Text>
        <span>{t('i0001')}</span>
        <br />
        {moment().format('LL')}
        <br />
        {moment().startOf('hour').fromNow()}
      </Text>

      <div>env REACT_APP_API_URL: {process.env.REACT_APP_API_URL}</div>
      <div>env: {config.env}</div>
      <div>config.apiUrl: {config.apiUrl}</div>
      <br />
      <br />
      <Button onClick={handleClearToken}>Clear Token</Button>
      <DatePicker />
    </I18nPageWrapper>
  )
}

I18nPage.propTypes = {}

export default I18nPage
