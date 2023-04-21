import React, { useContext, useEffect } from 'react'
import { FormLoginWrapper, LoginPageWrapper, RegisterWrapper } from './LoginPageStyled'
import { LoadingContext } from 'react-router-loading'
import IMAGES from '../../images'
import { Button, Checkbox, Col, Form, Input, Row, theme } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { PAGES, THEME } from '../../constant'
import authenticationStore from '../../stores/authenticationStore'
import MainLogo from '../../components/MainLogo/MainLogo'


const LoginPage = props => {
  // region props, hook, state =================
  const loadingContext = useContext(LoadingContext)
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  // endregion
  // region destructuring ======================

  // endregion
  // region variable ===========================

  // endregion
  // region function handle logic ==============

  const loading = async () => {
    loadingContext.done()
  }
  const handleSubmitLogin = (e) => {
    console.log(e)
    authenticationStore.userLogin()
    navigate(PAGES.HOME.PATH)
  }
  // endregion
  // region function render ====================

  // endregion
  // region side effect ========================
  useEffect(() => {
    loading()
  }, [])
  // endregion
  return (
    <LoginPageWrapper>
      <MainLogo height={40} />

      <FormLoginWrapper backgroundColor={colorBgContainer} primaryColor={THEME.PRIMARY_COLOR}>
        <h1 className={'title'}>
          Login
        </h1>
        <h6 className={'subtitle'}>
          Hello! Log in with your username.
        </h6>
        <Form
          size={'large'}
          colon={false}
          layout={'vertical'}
          className={'login-form'}
          onFinish={handleSubmitLogin}
        >
          <Row>
            <Col span={24}>
              <Form.Item name={'Username'} label={'Username'}>
                <Input placeholder={'Username'} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name={'Password'} label={'Password'}>
                <Input.Password placeholder={'Password'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={'Remember'} label={''} valuePropName="checked">
                <Checkbox>
                  Remember me
                </Checkbox>
              </Form.Item>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Form.Item label={''}>
                <Link to={'google.com'}>Forgot password ?</Link>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type={'primary'} htmlType={'submit'} block>LOG IN</Button>
            </Col>
            <Col span={24}>
              <RegisterWrapper>
                Don't have an account? <Link to={'#'}>Register</Link>
              </RegisterWrapper>
            </Col>
          </Row>


        </Form>
      </FormLoginWrapper>
    </LoginPageWrapper>
  )
}

LoginPage.propTypes = {}

export default LoginPage
