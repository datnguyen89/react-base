import React, { useContext, useEffect, useState } from 'react'
import { LookupAccountPageWrapper } from './LookupAccountPageStyled'
import { LoadingContext } from 'react-router-loading'
import { Typography } from 'antd'
import { Helmet } from 'react-helmet'
import Step1Search from '../../components/Step1Search'
import Step2RegisterInfo from '../../components/Step2RegisterInfo'
import { ConditionView } from '../../components/CommonStyled/CommonStyled'
import Step3AHold from '../../components/Step3AHold'
import Step3BNotHold from '../../components/Step3BNotHold'

const { Text } = Typography

const LookupAccountPage = props => {
  const [progressStep, setProgressStep] = useState('1')
  const [chosenAccount, setChosenAccount] = useState(null)
  const [customerInfo, setCustomerInfo] = useState(null)

  const handleNextToStep2 = (objAccount) => {
    console.log(objAccount)
    setChosenAccount(objAccount)
    setProgressStep('2')
  }
  const handleBackToStep1 = () => {
    setChosenAccount(null)
    setProgressStep('1')
  }
  const handleNextToStep3 = (response) => {
    console.log('customerInfo', response)
    setCustomerInfo(response)
    if (response.hold) {
      setProgressStep('3A')
    } else {
      setProgressStep('3B')
    }
  }
  const handleBackToStep2 = () => {
    setCustomerInfo(null)
    setProgressStep('2')
  }

  useEffect(() => {
    console.log('progressStep', progressStep)
  }, [progressStep])

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
    <LookupAccountPageWrapper>
      <Helmet>
        <title>Chọn tài khoản số đẹp</title>
      </Helmet>
      <ConditionView visible={progressStep === '1'}>
        <Step1Search nextStep={handleNextToStep2} />
      </ConditionView>
      <ConditionView visible={progressStep === '2'}>
        <Step2RegisterInfo onClickBack={handleBackToStep1} nextStep={handleNextToStep3} />
      </ConditionView>
      <ConditionView visible={progressStep === '3A'}>
        <Step3AHold customerInfo={customerInfo} onClickBack={handleBackToStep2} />
      </ConditionView>
      <ConditionView visible={progressStep === '3B'}>
        <Step3BNotHold customerInfo={customerInfo} />
      </ConditionView>
    </LookupAccountPageWrapper>
  )
}

LookupAccountPage.propTypes = {}

export default LookupAccountPage
