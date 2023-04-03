import React, { useContext, useEffect } from 'react'
import { HomePageWrapper } from './HomePageStyled'
import { LoadingContext } from 'react-router-loading'

const HomePage = props => {
  // region props, hook, state =================
  const loadingContext = useContext(LoadingContext)
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============

  const loading = async () => {
    loadingContext.done()
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================
  useEffect(() => {
    loading()
  }, [])
  // endregion

  return (
    <HomePageWrapper>
      Home

    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
