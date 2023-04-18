import React, { useContext, useEffect } from 'react'
import { HomePageWrapper } from './HomePageStyled'
import { LoadingContext } from 'react-router-loading'
import { DatePicker, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

const HomePage = props => {
  // region props, hook, state =================
  const { t } = useTranslation()
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============
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
      <DatePicker />
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
