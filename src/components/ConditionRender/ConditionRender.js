import React from 'react'
import PropTypes from 'prop-types'

const ConditionRender = props => {
  const { visible, children } = props
  return (
    visible
      ? children
      : null
  )
}

ConditionRender.propTypes = {
  visible: PropTypes.bool,
}

export default ConditionRender