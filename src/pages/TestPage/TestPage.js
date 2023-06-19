import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormItemWrapper, TestPageWrapper } from './TestPageStyled'
import { LoadingContext } from 'react-router-loading'
import { Button, Col, ConfigProvider, Drawer, Form, Input, Row, theme, Typography } from 'antd'

const TestPage = props => {

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const loadingContext = useContext(LoadingContext)
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


  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <TestPageWrapper backgroundColor={colorBgContainer}>
      <Form onFinish={handleFinish}>
        <Row gutter={[8, 8]}>
          <Col span={10}>
            <FormItemWrapper backgroundColor={colorBgContainer}>
              <label htmlFor={'Username'}>Tên đăng nhập</label>
              <Form.Item noStyle={true} label={'Tên đăng nhập'} name={'Username'}>
                <Input placeholder={'Username'} />
              </Form.Item>
            </FormItemWrapper>
          </Col>
          <Col span={10}>
            <FormItemWrapper backgroundColor={colorBgContainer}>
              <label htmlFor={'FullName'}>Họ và tên</label>
              <Form.Item noStyle={true} label={'Họ và tên'} name={'FullName'}>
                <Input placeholder={'FullName'} />
              </Form.Item>
            </FormItemWrapper>
          </Col>
          <Col span={4}>
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
          <Button type="primary" onClick={showDrawer}>
            Open drawer
          </Button>
        </ConfigProvider>

        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
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
    </TestPageWrapper>
  )
}

TestPage.propTypes = {}

export default TestPage