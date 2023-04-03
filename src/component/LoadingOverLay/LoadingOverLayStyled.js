import styled from 'styled-components'

export const LoadingOverLayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1003;
  background: #000000;
  overflow: hidden;
  box-sizing: inherit;

  .custom-spinner {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    box-shadow: 0 3px 3px 0 rgba(255, 56, 106, 1);
    transform: translate3d(0, 0, 0);
    animation: spin 2s linear infinite;

    &:before {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      box-shadow: 0 3px 3px 0 rgb(255, 228, 32);
      animation: spin 3s linear infinite;
    }

    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      box-shadow: 0 3px 3px 0 rgba(61, 175, 255, 1);
      animation: spin 1.5s linear infinite;
    }
  }
`
