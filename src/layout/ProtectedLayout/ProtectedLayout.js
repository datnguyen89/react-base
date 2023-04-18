import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ChangeLanguage, ProtectedLayoutWrapper, ToggleCollapse, ToggleTheme } from './ProtectedLayoutStyled'
import { Layout, Menu, Switch, theme } from 'antd'
import { useRecoilState } from 'recoil'
import { collapsedState, isDarkModeState, currentPageState } from '../../recoil/commonState'
import { HomeOutlined, InfoCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import IMAGES from '../../images'
import ToggleLanguage from '../../component/ToggleLanguage'
import MainLogo from '../../component/MainLogo/MainLogo'
import { useTranslation } from 'react-i18next'
import { PAGES } from '../../constant'

const { Header, Sider, Content } = Layout

const ProtectedLayout = () => {
  const location = useLocation()
  const navigate =useNavigate()
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState)
  const { t } = useTranslation()
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const handleToggleTheme = (checked) => {
    setIsDarkMode(checked)
  }

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
  ]

  const handleClickMenu = (e) => {
    navigate(e.key)
  }


  useEffect(() => {
    const segment = location.pathname.split(PAGES.HOME.PATH).filter(item => item !== '')
    if (segment.length === 0) {
      setCurrentPage(PAGES.HOME.PATH)
    } else {
      setCurrentPage(`/${segment[0]}`)
    }
  }, [location.pathname])

  return (
    <ProtectedLayoutWrapper>
      <Layout>
        <Header style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          background: colorBgContainer,
          position: 'sticky', top: 0, zIndex: 1, width: '100%',
          borderBottom: isDarkMode ? '1px solid rgb(64 64 64)' : '1px solid rgb(239 239 239)',
        }}>
          <MainLogo />
          <ToggleCollapse className={'trigger'} onClick={() => setCollapsed(!collapsed)}>
            {
              collapsed
                ? <MenuUnfoldOutlined />
                : <MenuFoldOutlined />
            }
          </ToggleCollapse>
          <ToggleTheme>
            <img src={isDarkMode ? IMAGES.SUN_DARK_MODE : IMAGES.SUN} alt={'sun'} height={20} width={20} />
            <Switch checked={isDarkMode} onChange={handleToggleTheme} />
            <img src={isDarkMode ? IMAGES.MOON_DARK_MODE : IMAGES.MOON} alt={'moon'} height={20} width={20} />
          </ToggleTheme>
          <ChangeLanguage>
            <ToggleLanguage />
          </ChangeLanguage>
        </Header>
        <Layout>
          <Sider
            width={256}
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              overflowY: 'auto',
              overflowX: 'hidden',
              height: 'calc(100vh -  64px)',
              position: 'fixed',
              left: 0,
              top: 64,
              bottom: 0,
              background: colorBgContainer,
            }}
          >
            <Menu
              selectedKeys={[currentPage]}
              mode='inline'
              theme={isDarkMode ? 'dark' : 'light'}
              items={items}
              onClick={handleClickMenu}
            />
          </Sider>
          <Content
            style={{
              marginLeft: 256,
              minHeight: 'calc(100vh - 64px)',
              padding: 16,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>

    </ProtectedLayoutWrapper>
  )
}

export default ProtectedLayout
