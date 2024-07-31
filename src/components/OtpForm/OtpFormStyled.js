import styled from 'styled-components'

export const OtpFormWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  margin: 0 auto;
  width: 440px;
  @media only screen and (max-width: 992px) {
    width: 440px;
  }
  @media only screen and (max-width: 768px) {
    width: 400px;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`
export const OtpDescription = styled.div`
  text-align: center;
`
export const ExpiredLabel = styled.div`
  text-align: center;
  margin-bottom: 16px;
`
export const ResendOtp = styled.span`
  cursor: pointer;
  color: #0261AD;
  margin-left: 4px;
`
export const TimeLeft = styled.span`
  color: red;
`
export const WaitingResendOtp = styled.span`
  color: #ccc;
  margin-left: 4px;
`
export const OtpTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 32px;
  color: ${props => props.color};
  margin-bottom: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 18px;
  }
`
export const OtpFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
  }
`
