import styled from 'styled-components'

export const LandingHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
`
export const TopHeader = styled.div`
  border-bottom: 1px solid #EAEAEA;
`
export const TopHeaderText = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #818181;
  text-transform: capitalize;
`
export const TopHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 0;
  @media only screen and (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
  }
`
export const BottomHeader = styled.div`
  border-bottom: 1px solid #EAEAEA;
`
export const MainLogo = styled.img`
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    height: 32px;
  }
  @media only screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`
export const DividerTopHeader = styled.div`
  width: 1px;
  height: 24px;
  background-color: #C0C0C0;
`
export const BottomHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 12px 0;
`
export const BottomHeaderText = styled.div`
  color: ${props => props.active ? '#00B74F' : '#2E2E2E'};
  font-weight: 500;
  font-size: 16px;
  border-bottom: ${props => props.active ? '2px solid #00B74F' : 'none'};
  padding-bottom: 4px;
  cursor: pointer;
  @media only screen and (max-width: 576px) {
    font-size: 14px;
  }
`