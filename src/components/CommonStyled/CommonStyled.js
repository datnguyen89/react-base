import styled from 'styled-components'
import { CONTAINER_WIDTH, THEME } from '../../constant'

export const Container = styled.div`
  display: ${props => props.display || 'block'};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap};
  margin: 0 auto;
  width: ${CONTAINER_WIDTH.XXL}%;
  height: ${props => props.height ? props.height : 'auto'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  background-image: url(${props => props.backgroundImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (min-width: 1600px) {
    width: ${CONTAINER_WIDTH.XXL}%;
  }
  @media only screen and (max-width: 1599px) {
    width: ${CONTAINER_WIDTH.XL}%;
  }
  @media only screen and (max-width: 1199px) {
    width: ${CONTAINER_WIDTH.LG}%;
  }
  @media only screen and (max-width: 991px) {
    width: ${CONTAINER_WIDTH.MD}%;
  }
  @media only screen and (max-width: 767px) {
    width: ${CONTAINER_WIDTH.SM}%;
  }
  @media only screen and (max-width: 575px) {
    width: ${CONTAINER_WIDTH.XS}%;
  }
`
export const PageTitle = styled.h1`
  margin: ${props => props.margin || '0'};
  padding: 16px 0;
  font-weight: 500;
  font-size: 24px;
  color: #2E2E2E;
  @media only screen and (max-width: 768px) {
    font-size: 22px;
    padding: 12px 0;
  }
  @media only screen and (max-width: 576px) {
    font-size: 14px;
    padding: 16px 0;
    font-weight: 700;
  }
`
export const FormBigTitle = styled.h2`
  margin: ${props => props.margin || '0'};
  text-align: ${props => props.textAlign || 'left'};
  font-weight: 500;
  font-size: 32px;
  color: #2E2E2E;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    margin: 8px 0 24px 0;
  }
  @media only screen and (max-width: 576px) {
    font-size: 18px;
    margin: 8px 0;
  }
`
export const FormLabelWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    min-height: 22px;
    margin-left: 32px;
  }
`
export const FormLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 12px;
  }
`
export const FormLabelSecondary = styled.span`
  color: #818181;
  font-size: 14px;  
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 10px;
  }
`
export const FormRequired = styled.span`
  color: red;
  padding: 0 4px;
`
export const WhiteCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #EAEAEA;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
`
export const TableWrapper = styled.div`
  background-color: #fff;
  padding: 16px;
  @media only screen and (max-width: 768px) {
    padding: 0;    
  }
  
`
export const PaginationLabel = styled.span`
  color: #767676;
  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`
export const RowSpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || '0 16px'};
  @media only screen and (max-width: 576px) {
    justify-content: center;
    flex-direction: column;
  }
`
export const FormWrapper = styled.div`
  width: 60%;
  margin: 24px auto;
  padding: ${props => props.padding ? props.padding : '0'};
  position: relative;
  @media only screen and (max-width: 1600px) {
    width: 90%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  } 
`
export const BackArrowWrapper = styled.div`
  margin-bottom: 16px;
  @media only screen and (max-width: 768px) {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  img {
    cursor: pointer;
  }
  
`
export const AccountInfoWrapper = styled.div`
  border: 1px solid #00B74F;
  background-color: #E1F4EE;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0 32px 0;
`
export const AccountInfoLabel = styled.div`
  color: #2E2E2E;
  font-size: 16px;
  font-weight: 500;
`
export const AccountInfoValue = styled.span`
  color: #00B74F;
  font-size: 16px;
  font-weight: 600;
  padding-left: 16px;
  @media only screen and (max-width: 576px) {
    padding-left: 4px;
  }
`
export const ConditionView = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
`

export const TextInform = styled.span`
  font-size: 16px;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 12px;
  }
`
export const TextPrimaryInform = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${THEME.PRIMARY_COLOR};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 12px;
  }
`
export const ColorText = styled.span`
  color: ${props => props.color || '#333'};
  font-weight: ${props => props.fontWeight || 'normal'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  font-size: ${props => props.fontSize || '1.4rem'};
  cursor: ${props => props.cursor || 'auto'};
  white-space: ${props => props.whiteSpace ? props.whiteSpace : 'pre-wrap'};
`