import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  ChangeLanguage,
  HeaderLeft,
  ProtectedLayoutWrapper,
  ToggleCollapse,
  ToggleTheme,
} from './ProtectedLayoutStyled'
import { Drawer, Layout, Switch, theme } from 'antd'
import { useRecoilState, useRecoilValue } from 'recoil'
import { collapsedState, currentPageState, isDarkModeState } from '../../recoil/commonState'
import { MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import IMAGES from '../../images'
import ToggleLanguage from '../../components/ToggleLanguage'
import MainLogo from '../../components/MainLogo/MainLogo'
import {
  MAIN_HEADER_HEIGHT,
  MAIN_SIDEBAR_COLLAPSE_WIDTH,
  MAIN_SIDEBAR_DRAWER_WIDTH,
  MAIN_SIDEBAR_EXTEND_WIDTH,
  PAGES,
} from '../../constant'
import { accessTokenState } from '../../recoil/authenticationState'
import { useMediaQuery } from 'react-responsive'
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar'

const { Header, Sider, Content } = Layout

const ProtectedLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const accessToken = useRecoilValue(accessTokenState)
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState)
  const [openDrawer, setOpenDrawer] = useState(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const isDesktop = useMediaQuery({ minWidth: 1024 })
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  // const isMobile = useMediaQuery({ maxWidth: 767 })

  const handleToggleTheme = (checked) => {
    setIsDarkMode(checked)
  }

  useEffect(() => {
    if (!accessToken) navigate(PAGES.LOGIN.PATH)
  }, [accessToken])

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
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          background: colorBgContainer,
          position: 'sticky',
          top: 0,
          height: MAIN_HEADER_HEIGHT,
          zIndex: 1,
          width: '100%',
          borderBottom: isDarkMode ? '1px solid rgb(64 64 64)' : '1px solid rgb(239 239 239)',
        }}>
          <HeaderLeft>
            <MainLogo />
            {
              isDesktop &&
              <ToggleCollapse className={'trigger'} onClick={() => setCollapsed(!collapsed)}>
                {
                  collapsed
                    ? <MenuUnfoldOutlined />
                    : <MenuFoldOutlined />
                }
              </ToggleCollapse>
            }

            <ToggleTheme>
              <img src={isDarkMode ? IMAGES.SUN_DARK_MODE : IMAGES.SUN} alt={'sun'} height={20} width={20} />
              <Switch checked={isDarkMode} onChange={handleToggleTheme} />
              <img src={isDarkMode ? IMAGES.MOON_DARK_MODE : IMAGES.MOON} alt={'moon'} height={20} width={20} />
            </ToggleTheme>
            <ChangeLanguage>
              <ToggleLanguage />
            </ChangeLanguage>
          </HeaderLeft>
          {
            !isDesktop &&
            <MenuOutlined style={{ fontSize: 16 }}
              onClick={() => setOpenDrawer(true)}
            />

          }
          <Drawer
            className={'sidebar-drawer'}
            width={MAIN_SIDEBAR_DRAWER_WIDTH}
            title="Validus"
            placement="right"
            onClose={() => setOpenDrawer(false)} open={openDrawer}>
            <MenuSideBar currentPage={currentPage} handleClickMenu={handleClickMenu} />
          </Drawer>
        </Header>
        <Layout>
          {
            isDesktop &&
            <Sider
              width={MAIN_SIDEBAR_EXTEND_WIDTH}
              collapsedWidth={MAIN_SIDEBAR_COLLAPSE_WIDTH}
              trigger={null}
              collapsible={true}
              collapsed={collapsed}
              style={{
                overflowY: 'auto',
                overflowX: 'hidden',
                height: `calc(100vh - ${MAIN_HEADER_HEIGHT}px)`,
                position: 'fixed',
                left: 0,
                top: MAIN_HEADER_HEIGHT,
                bottom: 0,
                background: colorBgContainer,
              }}
            >
              <MenuSideBar currentPage={currentPage} handleClickMenu={handleClickMenu} />
            </Sider>
          }
          <Content
            style={{
              marginLeft: isDesktop ?
                collapsed
                  ? MAIN_SIDEBAR_COLLAPSE_WIDTH
                  : MAIN_SIDEBAR_EXTEND_WIDTH
                : 0,
              minHeight: `calc(100vh - ${MAIN_HEADER_HEIGHT}px)`,
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
