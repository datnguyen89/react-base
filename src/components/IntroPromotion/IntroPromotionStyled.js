import styled from 'styled-components'
export const IntroPromotionWrapper = styled.div`
  padding: 0 32px;
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`
export const IntroPromotionDesc = styled.div`
  display: flex;
  align-items: center;
  color: #818181;
  font-weight: 500;
  font-size: 14px;
  gap: 8px;
  margin-bottom: 16px;
`
export const PromotionItem = styled.div`
  height: 100%;
  padding: 32px;
  @media only screen and (max-width: 576px) {
    padding: 16px;
  }
`
export const CircleNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #00B74F;
  width: 48px;
  height: 48px;
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  margin-bottom: 16px;
`
export const CircleNumberDesc = styled.div`
  color: #2E2E2E;
  font-weight: 500;
  font-size: 16px;
  text-align: justify;
`