import styled from 'styled-components'
import { Input } from 'antd'

export const Wrapper = styled.div`
  position: relative;
`

export const StyledLabel = styled.label`
  position: absolute;
  top: ${props => (props.focused || props.filled ? '0' : '50%')};
  left: 10px;
  font-size: ${props => (props.focused || props.filled ? '12px' : '14px')};
  transform: translateY(-50%);
  transition: all 0.3s;
  padding: 0 4px;
  pointer-events: none;
  z-index: 1;
  background-color: #ffffff;
  color: ${props => (props.focused ? '#333' : '#aaa')};
`

export const StyledInput = styled(Input)`
  transition: border-color 0.3s;
`
