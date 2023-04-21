import styled from 'styled-components'

export const LoginPageWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FormLoginWrapper = styled.div`
  background-color: ${props => props.backgroundColor || '#fff'};
  border: 1px solid #e4e9f2;
  border-radius: 2px;
  box-shadow: none;
  color: ${props => props.primaryColor};
  font-size: .9375rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 16px;
  padding: 16px;
  width: 100%;
  max-width: 38%;

  @media only screen and (min-width: 1921px) {
    max-width: 38%;
  }
  @media only screen and (max-width: 1920px) {
    max-width: 38%;
  }
  @media only screen and (max-width: 1600px) {
    max-width: 38%;
  }
  @media only screen and (max-width: 1200px) {
    max-width: 50%;
  }
  @media only screen and (max-width: 992px) {
    max-width: 50%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 64%;
  }
  @media only screen and (max-width: 576px) {
    max-width: 96%;
  }


  .title {
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3rem;
  }

  .subtitle {
    text-align: center;
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

