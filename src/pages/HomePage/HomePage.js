import React from 'react'
import { HomePageWrapper } from './HomePageStyled'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '../../hook/useQuery'
import { Button, Card } from 'antd'
import { useRecoilState } from 'recoil'
import { isDarkModeState } from '../../recoil/commonState'

const HomePage = props => {
  // region props, hook, state =================
  const query = useQuery()
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
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================

  // endregion

  return (
    <HomePageWrapper>
      Home
      <Card style={{ width: "max-content" }}>
        <Button onClick={handleToggleTheme}>
          Change Theme to {isDarkMode ? "Light" : "Dark"}
        </Button>
      </Card>
    </HomePageWrapper>
  )
}

HomePage.propTypes = {}

export default HomePage
