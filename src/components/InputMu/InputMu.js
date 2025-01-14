import React, { useState } from 'react'
import { StyledInput, StyledLabel, Wrapper } from './InputMuStyled'

const InputMu = ({ label, ...props }) => {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)

  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)
  const handleChange = e => setValue(e.target.value)

  return (
    <Wrapper>
      <StyledLabel focused={focused} filled={value}>
        {label}
      </StyledLabel>
      <StyledInput
        {...props}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default InputMu
