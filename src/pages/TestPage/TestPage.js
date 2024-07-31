import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormItemWrapper, TestPageWrapper } from './TestPageStyled'
import { LoadingContext } from 'react-router-loading'
import { Button, Col, ColorPicker, ConfigProvider, DatePicker, Drawer, Form, Input, Row, theme, Typography } from 'antd'
import OtpForm from '../../components/OtpForm'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { themeState } from '../../recoil/commonState'
import { useTranslation } from 'react-i18next'

const TestPage = props => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const { t } = useTranslation()

  const loadingContext = useContext(LoadingContext)
  const [THEME, SET_THEME] = useRecoilState(themeState)
  const resetTheme = useResetRecoilState(themeState)
  const loading = async () => {
    loadingContext.done()
  }
  useEffect(() => {
    loading()
  }, [])
  const handleFinish = (e) => {
    console.log(e)
  }
  // useEffect(() => {
  //   console.log(values)
  // },  [values])


  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  const handleChangeTheme = (color) => {
    let newTheme = { ...THEME, PRIMARY_COLOR: color.toHexString() }
    SET_THEME(newTheme)
  }
  const handleResetTheme = () => {
    resetTheme()
  }

  return (
    <TestPageWrapper backgroundColor={colorBgContainer}>
      <Form onFinish={handleFinish}>
        <Row gutter={[8, 8]}>
          <Col>
            <Form.Item noStyle={true} label={'Họ và tên'} name={'FullName'}>
              <Input placeholder={t('i0006')} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item noStyle={true} label={'Tên đăng nhập'} name={'Username'}>
              <Input placeholder={t('i0007')} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label={'Ngày sinh'} name={'BirthDate'}>
              <DatePicker />
            </Form.Item>
          </Col>
          <Col>
            <Button type={'primary'} htmlType={'submit'}>Submit</Button>
          </Col>
        </Row>
      </Form>
      <br />
      <>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#1890ff',
            },
          }}
        >
          <Button type='primary' onClick={showDrawer}>
            Open drawer
          </Button>
        </ConfigProvider>

        <Drawer title='Basic Drawer' placement='right' onClose={onClose} open={open}>
          <div>
            <p>
              <Typography.Text>
                Some contents
              </Typography.Text>
            </p>
            <p>
              <Typography.Text>
                Some contents
              </Typography.Text>
            </p>


          </div>
        </Drawer>
      </>
      <br />
      <br />
      <OtpForm
        description={`VPBank đã gửi mã OTP đến số điện thoại 0987655xxx`}
        visible={true}
        callbackOtp={(e) => {
          console.log(e)
        }}
        onCancel={() => {
        }} />
      <ColorPicker value={THEME.PRIMARY_COLOR} onChange={handleChangeTheme} />
      <br />
      <br />
      <Button onClick={handleResetTheme}>Default Theme</Button>
    </TestPageWrapper>
  )
}

TestPage.propTypes = {}

export default TestPage
