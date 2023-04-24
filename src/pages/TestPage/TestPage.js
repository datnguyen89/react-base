import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormItemWrapper, TestPageWrapper } from './TestPageStyled'
import { LoadingContext } from 'react-router-loading'
import * as Yup from 'yup';
import { Button, Col, Form, Input, Row } from 'antd'


const TestPage = props => {

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

  return (
    <TestPageWrapper>
      <Form onFinish={handleFinish}>
        <Row gutter={[8,8]}>
          <Col span={10}>
            <FormItemWrapper>
              <label htmlFor={'Username'}>Tên đăng nhập</label>
              <Form.Item noStyle={true} label={'Tên đăng nhập'} name={'Username'}>
                <Input placeholder={'Username'} />
              </Form.Item>
            </FormItemWrapper>
          </Col>
          <Col span={10}>
            <FormItemWrapper>
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
    </TestPageWrapper>
  )
}

TestPage.propTypes = {

}

export default TestPage