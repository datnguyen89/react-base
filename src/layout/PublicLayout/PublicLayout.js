import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { PublicLayoutWrapper } from './PublicLayoutStyled'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { breakPointState, collapsedState, currentPageState, isDarkModeState } from '../../recoil/commonState'
import {
  BREAKPOINT,
  MAIN_HEADER_HEIGHT, MAIN_SIDEBAR_COLLAPSE_WIDTH,
  MAIN_SIDEBAR_DRAWER_WIDTH,
  MAIN_SIDEBAR_EXTEND_WIDTH,
  PAGES,
} from '../../constant'
import { Drawer, Layout, Switch, theme } from 'antd'
import { ChangeLanguage, HeaderLeft, ToggleCollapse, ToggleTheme } from '../ProtectedLayout/ProtectedLayoutStyled'
import MainLogo from '../../components/MainLogo/MainLogo'
import { MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import IMAGES from '../../images'
import ToggleLanguage from '../../components/ToggleLanguage'
import MenuSideBar from '../../components/MenuSideBar/MenuSideBar'

const { Header, Sider, Content } = Layout

const PublicLayout = () => {
  const location = useLocation()
  const breakPoint = useRecoilValue(breakPointState)
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState)
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)

  const [openDrawer, setOpenDrawer] = useState(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const handleClickMenu = (e) => {
    navigate(e.key)
  }
  const handleToggleTheme = (checked) => {
    setIsDarkMode(checked)
  }
  const renderHeight = () => {
    switch (breakPoint) {
      case BREAKPOINT.XS:
      case BREAKPOINT.SM:
        return 20
      case BREAKPOINT.MD:
      case BREAKPOINT.LG:
      case BREAKPOINT.XL:
        return 24
      default:
        return 32
    }
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
    <PublicLayoutWrapper>
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
            <MainLogo height={renderHeight()} />
            {
              (breakPoint === BREAKPOINT.XL || breakPoint === BREAKPOINT.XXL || breakPoint === BREAKPOINT.LG) &&
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
            !(breakPoint === BREAKPOINT.XL || breakPoint === BREAKPOINT.XXL || breakPoint === BREAKPOINT.LG) &&
            <MenuOutlined
              style={{ fontSize: 16 }}
              onClick={() => setOpenDrawer(true)}
            />

          }
          <Drawer
            className={'sidebar-drawer'}
            width={MAIN_SIDEBAR_DRAWER_WIDTH}
            title='Validus'
            placement='right'
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}>
            <MenuSideBar currentPage={currentPage} handleClickMenu={handleClickMenu} />
          </Drawer>
        </Header>
        <Layout>
          <Content
            style={{
              transitionDuration: '0.2s',
              minHeight: `calc(100vh - ${MAIN_HEADER_HEIGHT}px)`,
              padding: 16,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </PublicLayoutWrapper>
  )
}

export default PublicLayout
