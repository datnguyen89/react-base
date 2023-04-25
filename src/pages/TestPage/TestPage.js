import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormItemWrapper, TestPageWrapper } from './TestPageStyled'
import { LoadingContext } from 'react-router-loading'
import * as Yup from 'yup'
import { Button, Col, Form, Input, Row } from 'antd'
import { ErrorMessage, Field, Formik } from 'formik'


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
        <Row gutter={[8, 8]}>
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
      <br />
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </TestPageWrapper>
  )
}

TestPage.propTypes = {}

export default TestPage