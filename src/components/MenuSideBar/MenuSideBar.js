import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { PAGES } from '../../constant'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useRecoilValue } from 'recoil'
import { isDarkModeState } from '../../recoil/commonState'
import { useTranslation } from 'react-i18next'

const MenuSideBar = props => {
  const { currentPage, handleClickMenu } = props
  const { t } = useTranslation()
  const isDarkMode = useRecoilValue(isDarkModeState)

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }

  const items = [
    getItem(t('i0002'), PAGES.HOME.PATH, <HomeOutlined />),
    getItem(t('i0003'), PAGES.ABOUT_US.PATH, <InfoCircleOutlined />),
    getItem(t('i0004'), PAGES.TEST.PATH, <InfoCircleOutlined />),
  ]

  return (
    <Menu
      selectedKeys={[currentPage]}
      mode='inline'
      theme={isDarkMode ? 'dark' : 'light'}
      items={items}
      onClick={handleClickMenu}
    />
  )
}

MenuSideBar.propTypes = {
  currentPage: PropTypes.string,
  handleClickMenu: PropTypes.func,
}

export default MenuSideBar