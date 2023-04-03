import React from 'react'
import 'antd/dist/reset.css'
import './App.less'

import LoadingOverLay from './component/LoadingOverLay'
// region Router
import { Routes, Route } from 'react-router-loading'
import history from './customRouter/history'
import CustomRouter from './customRouter/CustomRouter'
import { PAGES, THEME } from './constant'
import AuthLayout from './layout/AuthLayout'
import ProtectedLayout from './layout/ProtectedLayout'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ThemeProvider from './theme/ThemeProvider'
import { topbar } from 'react-router-loading'

topbar.config({
  autoRun: true,
  barThickness: 1,
  barColors: {
    0: THEME.PRIMARY_COLOR,
    .3: THEME.PRIMARY_COLOR,
    1.0: THEME.PRIMARY_COLOR,
  },
  shadowBlur: 1,
  shadowColor: 'red',
})

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
            <Route path={PAGES.HOME.PATH} element={<HomePage />} loading />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </CustomRouter>
      <LoadingOverLay />
    </ThemeProvider>
  )
}

export default App
