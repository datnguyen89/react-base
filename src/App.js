import React, { useState } from 'react'
import 'antd/dist/reset.css'
import './App.css'

import LoadingOverLay from './component/LoadingOverLay'
// region Router
import { Route, Routes } from 'react-router-dom'
import history from './customRouter/history'
import CustomRouter from './customRouter/CustomRouter'
import { PAGES, THEME } from './constant'
import AuthLayout from './layout/AuthLayout'
import ProtectedLayout from './layout/ProtectedLayout'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ThemeProvider from './theme/ThemeProvider'
import LoadingBar from 'react-top-loading-bar'

// endregion

function App() {
  const [progress, setProgress] = useState(90)
  return (
    <ThemeProvider>
      <LoadingBar color={THEME.PRIMARY_COLOR} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <CustomRouter history={history}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path={PAGES.LOGIN.PATH} element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path={PAGES.HOME.PATH} element={<HomePage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </CustomRouter>
      <LoadingOverLay />
    </ThemeProvider>
  )
}

export default App
