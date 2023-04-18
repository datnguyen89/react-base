import React from 'react'
import PropTypes from 'prop-types'
import { ToggleLanguageWrapper } from './ToggleLanguageStyled'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { languageState } from '../../recoil/commonState'
import IMAGES from '../../images'

const ToggleLanguage = props => {
  const [language, setLanguage] = useRecoilState(languageState)

  const handleClickToggleLanguage = () => {
    setLanguage(e => e === 'vi' ? 'en' : 'vi')
  }

  return (
    <ToggleLanguageWrapper>
      {
        language === 'vi'
          ? <img onClick={handleClickToggleLanguage} src={IMAGES.FLAG_VI} alt={'vi'} height={32} />
          : <img onClick={handleClickToggleLanguage} src={IMAGES.FLAG_EN} alt={'en'} height={32} />
      }
    </ToggleLanguageWrapper>
  )
}

ToggleLanguage.propTypes = {}

export default ToggleLanguage