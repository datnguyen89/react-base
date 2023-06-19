import styled from 'styled-components'

export const TestPageWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  padding:16px;
`
export const FormItemWrapper = styled.div`
  position: relative;
  label {
    position: absolute;
    top: -17px;
    left: 16px;
    z-index: 1;
    padding: 0 4px;
    background: ${props => props.backgroundColor};
  }
`