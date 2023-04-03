import styled from 'styled-components'

export const LoginPageWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FormLoginWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e4e9f2;
  border-radius: 2px;
  box-shadow: none;
  color: #222b45;
  font-size: .9375rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 16px;
  padding: 16px;
  max-width: 38%;
  width: 100%;

  .title {
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3rem;
  }

  .subtitle {
    text-align: center;
    color: #222b45;
    font-size: .9375rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
`
export const RegisterWrapper = styled.div`
  text-align: center;
  margin: 16px;
  font-size: 1rem;
`

