import React from 'react'
import viVN from 'antd/lib/locale/vi_VN'
import moment from 'moment'
import 'moment/locale/vi'
import { ConfigProvider, theme } from 'antd'
import { useRecoilValue } from 'recoil'
import { isDarkModeState } from '../recoil/commonState'
import { THEME } from '../constant'

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

  return (
    <ConfigProvider
      locale={viVN}
      getPopupContainer={node => {
        if (node) {
          return node.parentNode
        }
        return document.body
      }}
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: THEME.PRIMARY_COLOR,
          borderRadius: 2,
          colorLink: '#cfa850',
          colorLinkHover: '#cfa850',
          colorLinkActive: '#cfa850',

        },
        components: {
          Radio: {
            colorPrimary: '#cfa850',
            colorPrimaryHover: '#cfa850',
          },
          Checkbox: {
            colorPrimary: '#cfa850',
            colorPrimaryHover: '#cfa850',
          },
          Button: {
            colorPrimary: '#cfa850',
            colorPrimaryHover: '#cfa850',
          },
          Switch: {
            colorPrimary: '#cfa850',
            colorPrimaryHover: '#cfa850',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

ThemeProvider.propTypes = {}

export default ThemeProvider
