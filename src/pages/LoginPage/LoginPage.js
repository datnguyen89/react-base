import React from 'react'
import { LoginPageWrapper } from './LoginPageStyled'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isDarkModeState } from '../../recoil/commonState'
import { PAGES } from '../../constant'


const LoginPage = props => {
  // region props, hook, state =================

  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState)
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============
  const handleToggleTheme = () => {
    setIsDarkMode(prev => !prev)
    navigate(PAGES.HOME.PATH)
  }

  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion
  return (
    <LoginPageWrapper>
      Login
      <Card style={{ width: "max-content" }}>
        <Button onClick={handleToggleTheme}>
          Change Theme to {isDarkMode ? "Light" : "Dark"}
        </Button>
      </Card>
    </LoginPageWrapper>
  )
}

LoginPage.propTypes = {}

export default LoginPage
