import React, { useContext, useEffect } from 'react'
import { HomePageWrapper } from './HomePageStyled'
import { LoadingContext } from 'react-router-loading'
import { Typography } from 'antd'
import MainBanner from '../../components/MainBanner'

const { Text } = Typography

const HomePage = props => {
  // region loading
  const loadingContext = useContext(LoadingContext)
  const loading = async () => {
    loadingContext.done()
  }
  useEffect(() => {
    loading()
  }, [])
  // endregion

  return (
    <HomePageWrapper>
      <MainBanner />
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
