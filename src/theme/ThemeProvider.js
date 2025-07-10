import React, { useEffect } from 'react'
import viVN from 'antd/locale/vi_VN'
import enUS from 'antd/locale/en_US'
import moment from 'moment'
import 'dayjs/locale/vi'
import 'dayjs/locale/en'
import { ConfigProvider, Grid, notification, theme } from 'antd'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  breakPointState,
  isDarkModeState,
  languageState,
  themeState,
} from '../recoil/commonState'
import { BREAKPOINT } from '../constant'
import { ThemeProviderWrapper } from './ThemeProviderStyled'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'
import '../i18n/i18n'
import 'moment/locale/vi'
import 'moment/locale/en-nz'
import { useLocation } from 'react-router-dom'
import nprogress from 'nprogress'
import { startProgress, stopProgress } from '../commonFunction'
import { getClientInfo } from '../utils/deviceUtils'

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
  const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme
  const isDarkMode = useRecoilValue(isDarkModeState)
  const language = useRecoilValue(languageState)
  const setBreakPointState = useSetRecoilState(breakPointState)
  const THEME = useRecoilValue(themeState)

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

  const location = useLocation()
  useEffect(() => {
    nprogress.configure({
      showSpinner: false,
      template: `<div class='bar' role='bar' style='background: ${THEME.PRIMARY_COLOR}'></div>`,
    })
    startProgress()
    stopProgress()
    return () => {}
  }, [location])

  useEffect(() => {
    getClientInfo().then(res => {
      console.log(res)
    })
  }, [])

  return (
    <ConfigProvider
      locale={language === 'vi' ? viVN : enUS}
      theme={{
        algorithm: isDarkMode
          ? [darkAlgorithm, defaultAlgorithm]
          : [defaultAlgorithm, defaultAlgorithm],
        // algorithm: isDarkMode
        //   ? [darkAlgorithm, compactAlgorithm]
        //   : [defaultAlgorithm, compactAlgorithm],
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
      }}>
      <ThemeProviderWrapper
        primaryColor={THEME.PRIMARY_COLOR}
        isDarkMode={isDarkMode}>
        {children}
      </ThemeProviderWrapper>
    </ConfigProvider>
  )
}

ThemeProvider.propTypes = {}

export default ThemeProvider
