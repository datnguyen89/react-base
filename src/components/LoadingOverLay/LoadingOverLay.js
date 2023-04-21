import React from 'react'
import { LoadingOverLayWrapper } from './LoadingOverLayStyled'
import { useRecoilValue } from 'recoil'
import { appLoadingState } from '../../recoil/commonState'

const LoadingOverLay = props => {
  // region props, hook, state =================
  const appLoading = useRecoilValue(appLoadingState)
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============

  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion
  return (
    appLoading > 0 &&
    <LoadingOverLayWrapper>
      <div className="custom-spinner"></div>
    </LoadingOverLayWrapper>
  )
}

export default LoadingOverLay
