import React, { useContext, useEffect } from 'react'
import { HomePageWrapper } from './HomePageStyled'
import { LoadingContext } from 'react-router-loading'
import { Typography } from 'antd'
import MainBanner from '../../components/MainBanner'
import IntroService from '../../components/IntroService'
import IntroPromotion from '../../components/IntroPromotion'
import StartJourney from '../../components/StartJourney'

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
      <IntroService />
      <IntroPromotion />
      <StartJourney />
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
