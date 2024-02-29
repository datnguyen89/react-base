import React, { useEffect } from 'react'
import viVN from 'antd/locale/vi_VN'
import enUS from 'antd/locale/en_US'
import moment from 'moment'
import 'dayjs/locale/vi'
import 'dayjs/locale/en'
import { ConfigProvider, Grid, notification, theme } from 'antd'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { breakPointState, isDarkModeState, languageState } from '../recoil/commonState'
import { BREAKPOINT, THEME } from '../constant'
import { ThemeProviderWrapper } from './ThemeProviderStyled'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'
import '../i18n'
import { topbar } from 'react-router-loading'
import 'moment/locale/vi'
import 'moment/locale/en-nz'

const { useBreakpoint } = Grid
notification.config({
  duration: 5,
  maxCount: 5,
  // top: 60,
  // placement: 'top',
})

const ThemeProvider = props => {
  const { children } = props
  const screens = useBreakpoint()
  const { defaultAlgorithm, darkAlgorithm } = theme
  const isDarkMode = useRecoilValue(isDarkModeState)
  const language = useRecoilValue(languageState)
  const setBreakPointState = useSetRecoilState(breakPointState)

  const { i18n } = useTranslation()
  moment.locale(language === 'vi' ? 'vi' : 'en')

  const isXS = useMediaQuery({ maxWidth: 575 })
  const isSM = useMediaQuery({ minWidth: 576, maxWidth: 767 })
  const isMD = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  const isLG = useMediaQuery({ minWidth: 992, maxWidth: 1199 })
  const isXL = useMediaQuery({ minWidth: 1200, maxWidth: 1599 })
  const isXXL = useMediaQuery({ minWidth: 1600 })

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])
  useEffect(() => {
    if (!isXS) return
    setBreakPointState(BREAKPOINT.XS)
  }, [isXS])
  useEffect(() => {
    if (!isSM) return
    setBreakPointState(BREAKPOINT.SM)
  }, [isSM])
  useEffect(() => {
    if (!isMD) return
    setBreakPointState(BREAKPOINT.MD)
  }, [isMD])
  useEffect(() => {
    if (!isLG) return
    setBreakPointState(BREAKPOINT.LG)
  }, [isLG])
  useEffect(() => {
    if (!isXL) return
    setBreakPointState(BREAKPOINT.XL)
  }, [isXL])
  useEffect(() => {
    if (!isXXL) return
    setBreakPointState(BREAKPOINT.XXL)
  }, [isXXL])

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
          Table: {
            headerBg: THEME.PRIMARY_COLOR,
            headerSplitColor: THEME.PRIMARY_COLOR,
            headerColor: '#fff',
          },
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
