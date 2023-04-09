import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderDivider, ProtectedLayoutWrapper, ToggleCollapse, ToggleTheme } from './ProtectedLayoutStyled'
import { Layout, Switch, theme } from 'antd'
import { useRecoilState } from 'recoil'
import { collapsedState, isDarkModeState } from '../../recoil/commonState'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import IMAGES from '../../images'

const { Header, Sider, Content } = Layout

const ProtectedLayout = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const handleToggleTheme = (checked) => {
    setIsDarkMode(checked)
  }

  return (
    <ProtectedLayoutWrapper>
      <Layout>
        <Header style={{
          display: 'flex',
          alignItems: 'center',
          padding: 0,
          background: colorBgContainer,
          height: 76,
        }}>
          <ToggleCollapse className={'trigger'} onClick={() => setCollapsed(!collapsed)}>
            {
              collapsed
                ? <MenuUnfoldOutlined />
                : <MenuFoldOutlined />
            }
          </ToggleCollapse>
          <HeaderDivider />
          <img src={IMAGES.MAIN_LOGO} alt={'header-logo'} height={32} />
          <ToggleTheme>
            <img src={isDarkMode ? IMAGES.SUN_DARK_MODE : IMAGES.SUN} alt={'sun'} height={20} width={20} />
            <Switch checked={isDarkMode} onChange={handleToggleTheme} />
            <img src={isDarkMode ? IMAGES.MOON_DARK_MODE : IMAGES.MOON} alt={'moon'} height={20} width={20} />
          </ToggleTheme>
        </Header>
        <Layout>
          <Sider
            width={256}
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ background: colorBgContainer }}
          >

          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>

    </ProtectedLayoutWrapper>
  )
}

export default ProtectedLayout
