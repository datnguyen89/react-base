import React from 'react'
import viVN from 'antd/lib/locale/vi_VN'
import moment from 'moment'
import 'moment/locale/vi'
import { ConfigProvider, theme } from 'antd'
import { useRecoilValue } from 'recoil'
import { isDarkModeState } from '../recoil/commonState'

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
          colorPrimary: '#faab31',

        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

ThemeProvider.propTypes = {}

export default ThemeProvider
