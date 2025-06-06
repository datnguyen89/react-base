import React from 'react'
import 'antd/dist/reset.css'
import './App.less'
import 'nprogress/nprogress.css'
import LoadingOverLay from './components/LoadingOverLay'
import { PAGES } from './constant'
// region Router
import history from './customRouter/history'
import CustomRouter from './customRouter/CustomRouter'
import AuthLayout from './layout/AuthLayout'
import ProtectedLayout from './layout/ProtectedLayout'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ThemeProvider from './theme/ThemeProvider'
import AboutUs from './pages/AboutUs'
import PublicLayout from './layout/PublicLayout'
import I18nPage from './pages/I18nPage'
import { Route, Routes } from 'react-router-dom'
import ComponentsPage from './pages/ComponentsPage'

// endregion

function App() {
  return (
    <CustomRouter history={history}>
      <ThemeProvider>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path={PAGES.LOGIN.PATH} element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path={PAGES.ABOUT_US.PATH} element={<AboutUs />} />
            <Route path={PAGES.I18N.PATH} element={<I18nPage />} />
            <Route path={PAGES.COMPONENTS.PATH} element={<ComponentsPage />} />
          </Route>
          <Route element={<PublicLayout />}>
            <Route path={PAGES.HOME.PATH} element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <LoadingOverLay />
      </ThemeProvider>
    </CustomRouter>
  )
}

export default App
