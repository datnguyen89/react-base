import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AboutUsWrapper } from './AboutUsStyled'
import { LoadingContext } from 'react-router-loading'

const AboutUs = props => {

  const loadingContext = useContext(LoadingContext)
  const loading = async () => {
    loadingContext.done()
  }
  useEffect(() => {
    loading()
  }, [])

  return (
    <AboutUsWrapper>
      AboutUs!!
    </AboutUsWrapper>
  )
}

AboutUs.propTypes = {}

export default AboutUs