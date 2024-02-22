import React, { useEffect } from 'react'
import viVN from 'antd/locale/vi_VN'
import enUS from 'antd/locale/en_US'
import moment from 'moment'
import 'dayjs/locale/vi'
import 'dayjs/locale/en'
import { ConfigProvider, theme } from 'antd'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { deviceState, isDarkModeState, languageState } from '../recoil/commonState'
import { DEVICE, THEME } from '../constant'
import { ThemeProviderWrapper } from './ThemeProviderStyled'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'
import '../i18n'
import { topbar } from 'react-router-loading'

moment.locale('vi')

// notification.config({
//   duration: 5,
//   top: 60,
//   maxCount: 1,
//   placement: 'top',
// })

const ThemeProvider = props => {
  const { children } = props

  const { defaultAlgorithm, darkAlgorithm } = theme
  const isDarkMode = useRecoilValue(isDarkModeState)
  const language = useRecoilValue(languageState)
  const setDevice = useSetRecoilState(deviceState)

  const { i18n } = useTranslation()

  const isDesktop = useMediaQuery({ minWidth: 1600 })
  const isLapTop = useMediaQuery({ minWidth: 769, maxWidth: 1599 })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({ maxWidth: 480 })

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])
  useEffect(() => {
    if (!isDesktop) return
    setDevice(DEVICE.DESKTOP)
  }, [isDesktop])
  useEffect(() => {
    if (!isTablet) return
    setDevice(DEVICE.TABLET)
  }, [isTablet])
  useEffect(() => {
    if (!isMobile) return
    setDevice(DEVICE.MOBILE)
  }, [isMobile])

  topbar.config({
    autoRun: true,
    barThickness: 2,
    barColors: {
      0: isDarkMode ? '#fa8c16' : THEME.PRIMARY_COLOR,
      .3: isDarkMode ? '#fa8c16' : THEME.PRIMARY_COLOR,
      1.0: isDarkMode ? '#fa8c16' : THEME.PRIMARY_COLOR,
    },
    shadowBlur: 2,
    shadowColor: '#fff',
  })

  return (
    <ConfigProvider
      locale={language === 'vi' ? viVN : enUS}
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: THEME.PRIMARY_COLOR,
          borderRadius: THEME.BORDER_RADIUS,
          colorLink: THEME.PRIMARY_COLOR,
          colorLinkHover: THEME.PRIMARY_COLOR,
          colorLinkActive: THEME.PRIMARY_COLOR,
        },
        components: {
          // Button: {
          //   colorPrimary: THEME.COMPONENT_COLOR,
          //   colorPrimaryHover: THEME.COMPONENT_COLOR,
          // },
        },
      }}
    >
      <ThemeProviderWrapper isDarkMode={isDarkMode}>
        {children}
      </ThemeProviderWrapper>
    </ConfigProvider>
  )
}

ThemeProvider.propTypes = {}

export default ThemeProvider
