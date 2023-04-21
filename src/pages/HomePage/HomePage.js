import React, { useContext, useEffect } from 'react'
import { HomePageWrapper } from './HomePageStyled'
import { LoadingContext } from 'react-router-loading'
import { Button, DatePicker, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import config from '../../config'
import { useResetRecoilState } from 'recoil'
import { accessTokenState } from '../../recoil/authenticationState'

const { Text } = Typography

const HomePage = props => {
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
  const loadingContext = useContext(LoadingContext)
  const loading = async () => {
    loadingContext.done()
  }
  useEffect(() => {
    loading()
  }, [])

  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion

  return (
    <HomePageWrapper>
      <Text>
        <span>{t('i0001')}</span>
      </Text>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>api url{process.env.REACT_APP_API_URL}</div>
      <div>env {config.env}</div>
      <div>apiUrl {config.apiUrl}</div>
      <br />
      <br />
      <Button onClick={handleClearToken}>Clear Token</Button>
      <DatePicker />
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
