import React from 'react'
import { HomePageWrapper } from './HomePageStyled'
import { Typography } from 'antd'
import MainBanner from '../../components/MainBanner'
import { Helmet } from 'react-helmet'

const { Text } = Typography

const HomePage = props => {
  return (
    <HomePageWrapper>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainBanner />
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
