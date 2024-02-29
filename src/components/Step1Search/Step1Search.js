import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Step1SearchWrapper } from './Step1SearchStyled'
import {
  Container,
  FormBigTitle,
  FormLabel,
  FormLabelSecondary,
  FormRequired, FormWrapper,
  TableWrapper,
} from '../CommonStyled/CommonStyled'
import { Button, Col, Form, Input, Row, Select, Table } from 'antd'
import { BREAKPOINT, THEME } from '../../constant'
import PaginationRow from '../PaginationRow'
import { useRecoilValue } from 'recoil'
import { breakPointState } from '../../recoil/commonState'

const Step1Search = props => {
  const { nextStep } = props
  const [listAccount, setListAccount] = useState(null)
  const breakPoint = useRecoilValue(breakPointState)

  const [objectFilter, setObjectFilter] = useState({ pageIndex: 1, pageSize: 5 })
  const [form] = Form.useForm()
  const columns = [
    {
      title: 'STT',
      width: '10%',
      render: (text, record, index) => <>{index}</>,
    },
    {
      title: 'Số tài khoản',
      width: 'auto',
      render: record => record.stk,
    },
    {
      title: 'Phí đăng ký Online',
      width: 'auto',
      render: record => record.phidk,
    },
    {
      title: 'Lựa chọn',
      align: 'center',
      width: '15%',
      render: record =>
        <Button
          type={'primary'}
          onClick={() => handleChooseAccount(record)}>
          Chọn số này
        </Button>,
    },
  ]

  const handleChooseAccount = (account) => {
    console.log(account)
    nextStep(account)
  }
  const handleFilterAccount = (values) => {
    console.log(values)
    //TODO: call api filter by values
  }
  const handleClickSearch = () => {
    console.log(form.getFieldValue('accountTailNumber'))
    //TODO: call api get only by accountTailNumber
    setListAccount([
      {
        id: 1,
        stk: 1,
        phidk: 1000000,
      },
      {
        id: 2,
        stk: 2,
        phidk: 2000000,
      },
      {
        id: 3,
        stk: 3,
        phidk: 92000000,
      },
      {
        id: 4,
        stk: 4,
        phidk: 82000000,
      },
      {
        id: 5,
        stk: 5,
        phidk: 72000000,
      },
      {
        id: 6,
        stk: 6,
        phidk: 62000000,
      },
      {
        id: 7,
        stk: 7,
        phidk: 52000000,
      },
      {
        id: 8,
        stk: 8,
        phidk: 42000000,
      },
      {
        id: 9,
        stk: 9,
        phidk: 32000000,
      },
      {
        id: 11,
        stk: 11,
        phidk: 22000000,
      },
      {
        id: 12,
        stk: 12,
        phidk: 12000000,
      },
    ])
  }
  const handleChangePagination = (pageIndex, pageSize) => {
    if (objectFilter.pageSize !== pageSize) {
      objectFilter.pageIndex = 1
      objectFilter.pageSize = pageSize
    } else {
      objectFilter.pageIndex = pageIndex
    }
    // Call api reload data
  }

  return (
    <Step1SearchWrapper>
      <Container>
        <FormBigTitle textAlign={'center'}>
          Truy vấn tài khoản số đẹp
        </FormBigTitle>
        <FormWrapper>
          <Form
            form={form}
            layout={'vertical'}
            onFinish={handleFilterAccount}
          >
            <Row
              gutter={[
                { xs: 0, sm: 0, md: 16, lg: 16, xl: 16, xxl: 16 },
                { xs: 0, sm: 0, md: 16, lg: 16, xl: 16, xxl: 16 },
              ]}
              justify={{
                xs: 'center',
                sm: 'center',
                md: 'space-between',
                lg: 'space-between',
                xl: 'space-between',
                xxl: 'space-between',
              }}
              align={'bottom'}
            >
              <Col xs={24} sm={24} md={16} lg={20} xl={20} xxl={20}>
                <Form.Item
                  name={'accountTailNumber'}
                  label={
                    <>
                      <FormLabel>Chọn đuôi số tài khoản mong muốn</FormLabel>
                      <FormRequired> * </FormRequired>
                      <FormLabelSecondary>(Nhập dãy số từ 3 đến 15 ký tự)</FormLabelSecondary>
                    </>
                  }
                >
                  <Input
                    style={{ height: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'auto' : 48 }}
                    autoComplete={'off'}
                    placeholder={'Empty'} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8} lg={4} xl={4} xxl={4}>
                <Form.Item
                  label={''}
                >
                  <Button
                    style={{ height: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'auto' : 48 }}
                    block
                    type={'primary'}
                    onClick={handleClickSearch}>
                    Tìm kiếm
                  </Button>
                </Form.Item>
              </Col>
            </Row>

            {
              listAccount !== null
                ? listAccount?.length > 0
                  ? <TableWrapper>
                    <Row
                      gutter={[
                        { xs: 4, sm: 4, md: 16, lg: 16, xl: 16, xxl: 16 },
                        { xs: 4, sm: 4, md: 16, lg: 16, xl: 16, xxl: 16 },
                      ]}
                      justify={{
                        xs: 'center',
                        sm: 'center',
                        md: 'space-between',
                        lg: 'space-between',
                        xl: 'space-between',
                        xxl: 'space-between',
                      }}
                      align={'bottom'}
                    >
                      <Col xs={12} sm={12} md={8} lg={10} xl={10} xxl={10}>
                        <Form.Item
                          name={'accountNumberLength'}
                          label={'Độ dài số tài khoản'}
                        >
                          <Select
                            style={{ height: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'auto' : 48 }}
                            placeholder={'Tất cả'}>
                            <Select.Option value={'1'}>1</Select.Option>
                            <Select.Option value={'2'}>2</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={10} xl={10} xxl={10}>
                        <Form.Item
                          name={'accountNumberStatus'}
                          label={'Trạng thái'}
                        >
                          <Select
                            style={{ height: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'auto' : 48 }}
                            placeholder={'Tất cả'}>
                            <Select.Option value={'active'}>Hoạt động</Select.Option>
                            <Select.Option value={'inActive'}>Không hoạt động</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={4} xl={4} xxl={4}>
                        <Form.Item
                          label={''}
                        >
                          <Button
                            style={{
                              height: (breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'auto' : 48,
                              color: THEME.PRIMARY_COLOR,
                              border: `1px solid ${THEME.PRIMARY_COLOR}`,
                            }}
                            block type={'default'}
                            htmlType={'submit'}>
                            Lọc
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Table
                      headerBg={'#00B74F'}
                      dataSource={listAccount}
                      columns={columns}
                      scroll={{ x: 'max-content' }}
                      pagination={false}
                      rowKey={record => record.id}
                      size={(breakPoint === BREAKPOINT.XS || breakPoint === BREAKPOINT.SM) ? 'small' : 'middle'}
                    />
                    <PaginationRow
                      onChangePagination={handleChangePagination}
                      currentListLength={5}
                      totalCount={20}
                      pageIndex={objectFilter.pageIndex}
                      pageSize={objectFilter.pageSize}
                      pageSizeOptions={[50, 100, 150, 200]}
                      showSizeChanger={true}
                    />
                  </TableWrapper>
                  : <>Không có kết quả phù hợp</>
                : <></>
            }

          </Form>
        </FormWrapper>
      </Container>
    </Step1SearchWrapper>
  )
}

Step1Search.propTypes = {
  nextStep: PropTypes.func.isRequired,
}

export default Step1Search