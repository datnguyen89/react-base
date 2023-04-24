import styled from 'styled-components'

export const TestPageWrapper = styled.div`
  background-color: #ffffff;
  padding:16px;
`
export const FormItemWrapper = styled.div`
  position: relative;
  label {
    position: absolute;
    top: -13px;
    left: 16px;
    z-index: 1;
    padding: 0 4px;
    background: #fff;
  }
`