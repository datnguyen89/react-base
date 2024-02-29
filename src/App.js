import React from 'react'
import 'antd/dist/reset.css'
import './App.less'

import LoadingOverLay from './components/LoadingOverLay'
// region Router
import { Route, Routes } from 'react-router-loading'
import history from './customRouter/history'
import CustomRouter from './customRouter/CustomRouter'
import { PAGES } from './constant'
import AuthLayout from './layout/AuthLayout'
import ProtectedLayout from './layout/ProtectedLayout'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ThemeProvider from './theme/ThemeProvider'
import AboutUs from './pages/AboutUs'
import TestPage from './pages/TestPage'
import PublicLayout from './layout/PublicLayout'
import I18nPage from './pages/I18nPage'
import LookupAccountPage from './pages/LookupAccountPage'

// endregion

function App() {
  return (
    <ThemeProvider>
      <CustomRouter history={history}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path={PAGES.LOGIN.PATH} element={<LoginPage />} loading />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path={PAGES.TEST.PATH} element={<TestPage />} loading />
            <Route path={PAGES.ABOUT_US.PATH} element={<AboutUs />} loading />
            <Route path={PAGES.I18N.PATH} element={<I18nPage />} loading />
          </Route>
          <Route element={<PublicLayout />}>
            <Route path={PAGES.HOME.PATH} element={<HomePage />} loading />
            <Route path={PAGES.LOOKUP_ACCOUNT.PATH} element={<LookupAccountPage />} loading />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </CustomRouter>
      <LoadingOverLay />
    </ThemeProvider>
  )
}

export default App
