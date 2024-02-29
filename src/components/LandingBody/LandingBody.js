import React from 'react'
import PropTypes from 'prop-types'
import { LandingBodyWrapper } from './LandingBodyStyled'

const LandingBody = props => {
  const { children } = props
  return (
    <LandingBodyWrapper>
      {children}
    </LandingBodyWrapper>
  )
}

LandingBody.propTypes = {}

export default LandingBody